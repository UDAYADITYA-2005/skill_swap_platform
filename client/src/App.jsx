import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RequestForm from './pages/RequestForm';
import SwapRequests from './pages/SwapRequests';
import AdminPanel from './pages/AdminPanel';

import RequireAuth from './components/RequireAuth';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/request"
          element={
            <RequireAuth>
              <RequestForm />
            </RequireAuth>
          }
        />
        <Route
          path="/requests"
          element={
            <RequireAuth>
              <SwapRequests />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth adminOnly={true}>
              <AdminPanel />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
