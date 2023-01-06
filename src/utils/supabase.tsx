import { createClient } from '@supabase/supabase-js'
import { Database } from '../interfaces/database.types'

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>('https://cizlshedwfpxdajmbmyl.supabase.co', process.env.REACT_APP_SUPABASE_KEY as string)