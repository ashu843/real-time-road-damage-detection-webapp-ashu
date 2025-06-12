// pages/api/potholes.js or api/potholes/index.js

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;

    const { data, error } = await supabase
      .from('potholes') // <-- your Supabase table name
      .insert([{ latitude, longitude }]);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ message: 'Pothole saved', data });
  }

  res.status(405).json({ error: 'Method not allowed' });
}


