export async function addPostAdmin(title: string, content: string, category?: string) {
  const res = await fetch('/.netlify/functions/addPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-key': import.meta.env.VITE_ADMIN_KEY
    },
    body: JSON.stringify({ title, content, category })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to add post');
  }

  return res.json();
}
