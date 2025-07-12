import React, { useState } from 'react';
import axios from 'axios';

export default function RequestForm({ receiverId }) {
  const [message, setMessage] = useState('');
  const [skillOffered, setSkillOffered] = useState('');
  const [skillRequested, setSkillRequested] = useState('');

  const senderId = JSON.parse(localStorage.getItem('user'))?._id;

  const sendRequest = async () => {
    await axios.post('/api/swaps', {
      sender: senderId,
      receiver: receiverId,
      message,
      skillOffered,
      skillRequested
    });
    alert('Request sent!');
  };

  return (
    <div className="p-4">
      <textarea onChange={e => setMessage(e.target.value)} placeholder="Message" className="w-full mb-2 p-2 border" />
      <input onChange={e => setSkillOffered(e.target.value)} placeholder="Skill Offered" className="w-full mb-2 p-2 border" />
      <input onChange={e => setSkillRequested(e.target.value)} placeholder="Skill Requested" className="w-full mb-2 p-2 border" />
      <button onClick={sendRequest} className="bg-blue-600 text-white px-4 py-2">Send Request</button>
    </div>
  );
}
