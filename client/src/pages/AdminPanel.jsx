import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users/public').then(res => setUsers(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin Panel - All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id} className="border-b py-2">
            {user.name} – {user.email} – {user.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
