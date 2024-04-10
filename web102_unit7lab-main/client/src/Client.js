import { createClient } from '@supabase/supabase-js'

const URL = 'https://jephpuwzegdqmsipzddu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplcGhwdXd6ZWdkcW1zaXB6ZGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3NjU3NTksImV4cCI6MjAyODM0MTc1OX0.AYgHketce1Dtj4jeofhngP3QeIHZ1E0Jx1oCc_aeGok';

export const supabase = createClient(URL, API_KEY);