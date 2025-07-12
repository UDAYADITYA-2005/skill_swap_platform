import React from 'react';

export default function SkillCard({ user }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={user.profilePhoto} alt="Profile" className="w-16 h-16 rounded-full mb-2" />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>📍 {user.location}</p>
      <p><strong>Offers:</strong> {user.skillsOffered.join(', ')}</p>
      <p><strong>Wants:</strong> {user.skillsWanted.join(', ')}</p>
    </div>
  );
}
