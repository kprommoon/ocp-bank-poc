import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test function
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('test_table').select('*');
    
    if (error) {
      return {
        success: false,
        message: `Error: ${error.message}`,
        error
      };
    }
    
    return {
      success: true,
      message: 'Successfully connected to Supabase!',
      data
    };
  } catch (err) {
    return {
      success: false,
      message: `Unexpected error: ${err instanceof Error ? err.message : 'Unknown error'}`,
      error: err
    };
  }
}