import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqslaxqgfguiamoaifoh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxc2xheHFnZmd1aWFtb2FpZm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NjE3ODIsImV4cCI6MjAyODEzNzc4Mn0.6WGDpXDRyuWU_weoZGU6YB0SthKsyEUeKiqY2qV6tPM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
