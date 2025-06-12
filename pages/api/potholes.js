// pages/api/potholes.js or api/potholes/index.js

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('potholes').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;
    const { data, error } = await supabase.from('potholes').insert([{ latitude, longitude }]);
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data[0]);
  }
}


