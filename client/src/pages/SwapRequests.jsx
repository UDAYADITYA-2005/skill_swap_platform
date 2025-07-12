import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SwapRequests() {
  const [requests, setRequests] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user?._id) {
      axios.get(`/api/swaps/${user._id}`).then(res => setRequests(res.data));
    }
  }, [user]);

  const handleStatusUpdate = (id, status) => {
    axios.put(`/api/swaps/${id}`, { status }).then(res => {
      setRequests(prev =>
        prev.map(req => (req._id === id ? { ...req, status } : req))
      );
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Swap Requests</h2>
      {requests.length === 0 ? (
        <p>No swap requests found.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req._id} className="bg-white shadow-md p-4 rounded">
              <p><strong>From:</strong> {req.sender.name}</p>
              <p><strong>To:</strong> {req.receiver.name}</p>
              <p><strong>Skill Offered:</strong> {req.skillOffered}</p>
              <p><strong>Skill Requested:</strong> {req.skillRequested}</p>
              <p><strong>Status:</strong> {req.status}</p>
              {user._id === req.receiver._id && req.status === "Pending" && (
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleStatusUpdate(req._id, "Accepted")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(req._id, "Rejected")}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
