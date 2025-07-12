import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-indigo-600">
          SkillSwap
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </Link>

          {user && (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-indigo-600 font-medium">
                Profile
              </Link>
              <Link to="/request" className="text-gray-700 hover:text-indigo-600 font-medium">
                Request Swap
              </Link>
              <Link to="/requests" className="text-gray-700 hover:text-indigo-600 font-medium">
                My Requests
              </Link>
              {user.isAdmin && (
                <Link to="/admin" className="text-gray-700 hover:text-indigo-600 font-medium">
                  Admin Panel
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <Link
              to="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
