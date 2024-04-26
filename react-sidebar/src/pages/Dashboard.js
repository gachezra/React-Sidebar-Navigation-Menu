import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchGameHistory();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/auth/user');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchGameHistory = async () => {
    try {
      const response = await axios.get('/api/game-history');
      setGameHistory(response.data);
    } catch (error) {
      console.error('Error fetching game history:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl px-4 py-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user?.username}</h2>
          <div className="flex flex-col space-y-2">
            <p>
              <span className="font-bold">Email:</span> {user?.email}
            </p>
            <p>
              <span className="font-bold">Win Count:</span> {user?.winCount}
            </p>
            <p>
              <span className="font-bold">Loss Count:</span> {user?.lossCount}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Game History</h2>
          {gameHistory.length === 0 ? (
            <p>No game history available.</p>
          ) : (
            <ul>
              {gameHistory.map((game) => (
                <li key={game.id} className="mb-4">
                  <h3 className="text-xl font-bold">Room ID: {game.roomId}</h3>
                  <p>
                    <span className="font-bold">Date:</span>{' '}
                    {new Date(game.date).toLocaleString()}
                  </p>
                  <p>
                    <span className="font-bold">Result:</span>{' '}
                    {game.winner === user.userId ? 'Win' : 'Loss'}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;