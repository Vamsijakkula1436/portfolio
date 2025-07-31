import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactSubmission {
  name: string
  email: string
  subject: string
  message: string
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Parse the request body
    const { name, email, subject, message }: ContactSubmission = await req.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Initialize Supabase client for logging
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Store the submission in the database for record keeping
    const { data: submission, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert({
        name,
        email,
        subject,
        message
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      // Continue with email sending even if database fails
    }

    // Send email directly using Gmail SMTP
    const emailPayload = {
      to: 'suryavamsi1436@gmail.com',
      from: email,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #ff6200; margin-bottom: 20px; border-bottom: 2px solid #ff6200; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Contact Details:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #ff6200; border-radius: 5px;">
                <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>Submitted on: ${new Date().toLocaleString()}</p>
              <p>From: Portfolio Website Contact Form</p>
            </div>
          </div>
        </div>
      `
    }

    // Use Resend API for reliable email delivery
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['suryavamsi1436@gmail.com'],
          subject: emailPayload.subject,
          html: emailPayload.html,
          reply_to: email
        })
      })

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text()
        console.error('Resend email sending failed:', errorText)
        throw new Error('Failed to send email via Resend')
      }

      console.log('Email sent successfully via Resend')
    } else {
      // Fallback: Use a simple email service or log the email
      console.log('Email would be sent to suryavamsi1436@gmail.com:', emailPayload)
      
      // For development, we'll simulate successful email sending
      // In production, you should configure a proper email service
    }

    // Update submission status if database insert was successful
    if (submission) {
      await supabaseClient
        .from('contact_submissions')
        .update({ status: 'processed' })
        .eq('id', submission.id)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        id: submission?.id || 'no-db-record'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send message. Please try again or contact directly at suryavamsi1436@gmail.com' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})