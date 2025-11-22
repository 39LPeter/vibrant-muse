import { useState } from 'react';
import { addPostAdmin } from '../supabaseAdmin';

export default function AdminPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      await addPostAdmin(title, content, category);
      setStatus('Post added successfully!');
      setTitle('');
      setContent('');
      setCategory('');
    } catch (err: any) {
      setStatus('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full mb-2 p-2 border rounded h-32"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Add Post
      </button>
      <p className="mt-2 text-sm">{status}</p>
    </form>
  );
}
