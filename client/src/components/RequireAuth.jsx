import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children, adminOnly = false }) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return <Navigate to="/login" />;
  if (adminOnly && !user.isAdmin) return <Navigate to="/" />;

  return children;
}
