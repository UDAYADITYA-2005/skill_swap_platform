import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" className="w-full mb-4 p-2 border" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" className="w-full mb-4 p-2 border" />
      <button type="submit" className="w-full bg-blue-600 text-white py-2">Login</button>
    </form>
  );
}
