import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchGameData();
  }, []);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`/api/auth/user/${userId}`);
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchGameData = async () => {
    try {
      const { data } = await axios.get('/api/game-data');
      setGameData(data.filter((game) => game.playerList.some((player) => player.userId === userId)));
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl px-4 py-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">User Profile</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">User Information</h2>
          <div className="flex flex-col space-y-2">
            <p>
              <span className="font-bold">Username:</span> {user.username}
            </p>
            <p>
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-bold">Win Count:</span> {user.winCount}
            </p>
            <p>
              <span className="font-bold">Loss Count:</span> {user.lossCount}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Game History</h2>
          {gameData.length === 0 ? (
            <p>No game data available.</p>
          ) : (
            <ul>
              {gameData.map((game) => (
                <li key={game.roomNo} className="mb-4">
                  <h3 className="text-xl font-bold">Room No: {game.roomNo}</h3>
                  <p>
                    <span className="font-bold">Number of Players:</span> {game.numPlayers}
                  </p>
                  <p>
                    <span className="font-bold">Winner:</span> {game.winner.username}
                  </p>
                  <p>
                    <span className="font-bold">Created At:</span> {new Date(game.createdAt).toLocaleString()}
                  </p>
                  <p>
                    <span className="font-bold">Last Active At:</span> {new Date(game.lastActiveAt).toLocaleString()}
                  </p>
                  <div>
                    <span className="font-bold">Player List:</span>
                    <ul>
                      {game.playerList.map((player) => (
                        <li key={player.userId} className="ml-4">
                          <p>
                            <span className="font-bold">Username:</span> {player.username}
                          </p>
                          <p>
                            <span className="font-bold">Hand:</span> {player.hand.join(', ')}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;