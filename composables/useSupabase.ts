import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()
  
  // Check if Supabase is configured with proper validation
  if (!config.public.supabaseUrl || 
      !config.public.supabaseAnonKey || 
      config.public.supabaseUrl === 'your_supabase_project_url' ||
      config.public.supabaseAnonKey === 'your_supabase_anon_key') {
    console.warn('Supabase not configured. Please set up your Supabase project.')
    return null
  }
  
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey
  )
  
  return supabase
}