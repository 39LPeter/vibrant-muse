import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const ADMIN_KEY = process.env.ADMIN_KEY!;

export async function handler(event: any) {
  try {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

    if (event.headers['x-admin-key'] !== ADMIN_KEY) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
    }

    const { title, content, category } = JSON.parse(event.body);

    if (!title || !content) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing title or content' }) };
    }

    const { data, error } = await supabase
      .from('posts')
      .insert({ title, content, category })
      .select()
      .single();

    if (error) throw error;

    return { statusCode: 201, body: JSON.stringify(data) };
  } catch (err: any) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to add post' }) };
  }
}
