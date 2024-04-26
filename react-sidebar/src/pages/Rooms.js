import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rooms = () => {
 const [rooms, setRooms] = useState([]);
 const [joinedRoomId, setJoinedRoomId] = useState(null);
 const [newRoom, setNewRoom] = useState({ numPlayers: 4, numToDeal: 5 });

 useEffect(() => {
   fetchRooms();
 }, []);

 const fetchRooms = async () => {
   try {
     const response = await axios.get('/api/rooms');
     setRooms(response.data);
   } catch (error) {
     console.error('Error fetching rooms:', error);
   }
 };

 const createRoom = async () => {
   try {
     const response = await axios.post('/api/rooms', newRoom);
     setRooms([...rooms, response.data]);
   } catch (error) {
     console.error('Error creating room:', error);
   }
 };

 const joinRoom = async (roomId) => {
   try {
     const response = await axios.post(`/api/rooms/${roomId}/join`);
     setJoinedRoomId(roomId);
   } catch (error) {
     console.error('Error joining room:', error);
   }
 };

 const startGame = async (roomId) => {
   try {
     const response = await axios.post(`/api/rooms/${roomId}/start`);
     console.log('Game started:', response.data);
   } catch (error) {
     console.error('Error starting game:', error);
   }
 };

 return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
     <div className="max-w-4xl px-4 py-8 bg-gray-800 rounded-lg shadow-lg">
       <h1 className="text-4xl font-bold mb-4">Poker Rooms</h1>
       <div className="mb-6">
         <h2 className="text-2xl font-bold mb-2">Create Room</h2>
         <div className="flex flex-row space-x-4">
           <input
             type="number"
             min="2"
             max="10"
             value={newRoom.numPlayers}
             onChange={(e) => setNewRoom({ ...newRoom, numPlayers: parseInt(e.target.value, 10) })}
             className="bg-gray-700 text-white py-2 px-4 rounded"
           />
           <input
             type="number"
             min="5"
             max="10"
             value={newRoom.numToDeal}
             onChange={(e) => setNewRoom({ ...newRoom, numToDeal: parseInt(e.target.value, 10) })}
             className="bg-gray-700 text-white py-2 px-4 rounded"
           />
           <button
             onClick={createRoom}
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
           >
             Create Room
           </button>
         </div>
       </div>
       <div>
         <h2 className="text-2xl font-bold mb-2">Available Rooms</h2>
         {rooms.length === 0 ? (
           <p>No rooms available.</p>
         ) : (
           <ul>
             {rooms.map((room) => (
               <li key={room.roomId} className="flex items-center justify-between mb-2">
                 <div>
                   <span className="font-bold">Room ID:</span> {room.roomId}
                 </div>
                 <div>
                   <span className="font-bold">Players:</span> {room.playerList.length}/{room.numPlayers}
                 </div>
                 <div>
                   <button
                     onClick={() => joinRoom(room.roomId)}
                     disabled={room.playerList.length >= room.numPlayers}
                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
                   >
                     Join
                   </button>
                   {joinedRoomId === room.roomId && (
                     <button
                       onClick={() => startGame(room.roomId)}
                       className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded"
                     >
                       Start Game
                     </button>
                   )}
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

export default Rooms;