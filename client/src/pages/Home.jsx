import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkillCard from '../components/SkillCard';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users/public').then(res => setUsers(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {users.map(user => (
        <SkillCard key={user._id} user={user} />
      ))}
    </div>
  );
}
