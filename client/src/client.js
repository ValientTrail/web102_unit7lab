import { createClient } from '@supabase/supabase-js'
const URL = 'https://yuybyhnzcjyhtlucxete.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eWJ5aG56Y2p5aHRsdWN4ZXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjY0NTUsImV4cCI6MjAyODAwMjQ1NX0.ieumjBj0qxzRCQj_fvBsXQ_uHk_iwCJN_2Y941spNcw';

export const supabase = createClient(URL, API_KEY);