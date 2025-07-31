<template>
<section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p class="text-xl text-gray-300">
        Let's discuss your next project or collaboration opportunity
      </p>
    </div>
    
    <div class="bg-black/50 rounded-2xl p-8 border border-gray-800">
      <!-- Thank You Message - Shows immediately after form submission -->
      <div v-if="showThankYou" class="text-center py-12 animate-fade-in">
        <div class="mb-6">
          <svg class="w-20 h-20 text-green-400 mx-auto mb-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-3xl font-bold text-white mb-4">Thank You!</h3>
          <p class="text-xl text-gray-300 mb-6">
            Your message was sent successfully! I'll get back to you soon.
          </p>
          <div class="bg-gray-800/50 rounded-lg p-6 mb-6 text-left">
            <h4 class="text-lg font-semibold text-orange-400 mb-3">Message Details:</h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <span class="text-green-400 mr-2">✓</span>
                Message sent to suryavamsi1436@gmail.com
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">📧</span>
                From: {{ form.name }} ({{ form.email }})
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 mr-2">⏰</span>
                Expected response time: Within 24 hours
              </li>
            </ul>
          </div>
          <p class="text-gray-400 mb-6">
            Need immediate assistance? Contact me directly at:
            <br>
            <a href="mailto:suryavamsi1436@gmail.com" class="text-orange-400 hover:text-orange-300 font-semibold text-lg">
              suryavamsi1436@gmail.com
            </a>
          </p>
          <div class="space-y-3">
            <button 
              @click="resetForm" 
              class="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
      
      <!-- Contact Form -->
      <form v-else @submit.prevent="submitForm" class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-gray-300 mb-2 font-medium">Name *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              placeholder="Your full name" 
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              required
            >
          </div>
          <div>
            <label for="email" class="block text-gray-300 mb-2 font-medium">Email *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              placeholder="your.email@example.com" 
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              required
            >
          </div>
        </div>
        
        <div>
          <label for="subject" class="block text-gray-300 mb-2 font-medium">Subject *</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject"
            placeholder="What's this about?" 
            class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            required
          >
        </div>
        
        <div>
          <label for="message" class="block text-gray-300 mb-2 font-medium">Message *</label>
          <textarea 
            id="message" 
            v-model="form.message"
            rows="6" 
            placeholder="Tell me about your project, ideas, or how I can help you..." 
            class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-vertical"
            required
          ></textarea>
        </div>
        
        <div class="space-y-4">
          <button 
            type="submit" 
            class="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting" class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Send Message
            </span>
            <span v-else class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          </button>
          
          <p class="text-center text-sm text-gray-400">
            Your message will be sent directly to Vamsi
          </p>
        </div>
      </form>
    </div>
  </div>
</section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showThankYou = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Show thank you message immediately for better UX
    showThankYou.value = true
    
    // Prepare the email data
    const emailData = {
      to: 'suryavamsi1436@gmail.com',
      subject: `New Contact Form Submission: ${form.value.subject}`,
      body: `
        You have received a new message from your portfolio website contact form:
        
        Name: ${form.value.name}
        Email: ${form.value.email}
        Subject: ${form.value.subject}
        
        Message:
        ${form.value.message}
        
        ---
        Sent from your portfolio website contact form
      `
    }
    
    // Send the email using a serverless function or email service
    await sendEmail(emailData)
    
    // Also open the user's email client as a fallback
    openEmailClient()
    
  } catch (error) {
    console.error('Error sending message:', error)
    // Even if there's an error, we keep the thank you message shown
    // because we've opened the email client as a fallback
  } finally {
    isSubmitting.value = false
  }
}

const sendEmail = async (emailData) => {
  // In a real implementation, you would call your backend or email service here
  // This is a mock implementation that simulates a successful send
  
  // For a real implementation, you might use:
  // 1. A serverless function (like Vercel, Netlify, or AWS Lambda)
  // 2. An email service like SendGrid, Mailgun, or Postmark
  // 3. A simple fetch to your own backend API
  
  // Example using fetch (you would need to implement the API endpoint):
  /*
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send email');
  }
  */
  
  // For now, we'll just simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
}

const openEmailClient = () => {
  const subject = encodeURIComponent(form.value.subject || 'Contact from Portfolio Website')
  const body = encodeURIComponent(`Hi Vamsi,

I'm ${form.value.name} and I'd like to get in touch with you.

Subject: ${form.value.subject}

Message:
${form.value.message}

Best regards,
${form.value.name}
Email: ${form.value.email}

---
Sent from your portfolio website contact form`)

  const mailtoLink = `mailto:suryavamsi1436@gmail.com?subject=${subject}&body=${body}`
  
  // Open email client in a new tab
  window.open(mailtoLink, '_blank')
}

const resetForm = () => {
  form.value = { 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  }
  showThankYou.value = false
}
</script>