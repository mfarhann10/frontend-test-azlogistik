import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://dbnthtqmqillfeewedkl.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibnRodHFtcWlsbGZlZXdlZGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MDEzNDMsImV4cCI6MjA2OTA3NzM0M30.vPoqiUT4I4ACDUz-MA1fihOrpBKnex1BhqXpFWWGoCM"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;