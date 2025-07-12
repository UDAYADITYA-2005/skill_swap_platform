import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState({});
  const userId = JSON.parse(localStorage.getItem('user'))?._id;

  useEffect(() => {
    axios.get(`/api/users/${userId}`).then(res => setUser(res.data));
  }, [userId]);

  const updateProfile = async () => {
    await axios.put(`/api/users/${userId}`, user);
    alert('Profile updated!');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <input value={user.name || ''} onChange={e => setUser({ ...user, name: e.target.value })} placeholder="Name" className="w-full mb-2 p-2 border" />
      <input value={user.location || ''} onChange={e => setUser({ ...user, location: e.target.value })} placeholder="Location" className="w-full mb-2 p-2 border" />
      <textarea value={user.skillsOffered?.join(', ') || ''} onChange={e => setUser({ ...user, skillsOffered: e.target.value.split(',') })} placeholder="Skills Offered (comma-separated)" className="w-full mb-2 p-2 border" />
      <textarea value={user.skillsWanted?.join(', ') || ''} onChange={e => setUser({ ...user, skillsWanted: e.target.value.split(',') })} placeholder="Skills Wanted (comma-separated)" className="w-full mb-2 p-2 border" />
      <button onClick={updateProfile} className="bg-green-600 text-white px-4 py-2">Save Changes</button>
    </div>
  );
}
