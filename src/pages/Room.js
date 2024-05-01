import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'ldrs/ring';

const Room = ({ roomId }) => {
 const [room, setRoom] = useState(null);
 const [player, setPlayer] = useState(null);
 const [topCard, setTopCard] = useState(null);
 const [stack, setStack] = useState([]);
 const [winner, setWinner] = useState(null);

 useEffect(() => {
   fetchRoomData();
 }, [roomId]);

 const fetchRoomData = async () => {
   try {
     const response = await axios.get(`/api/rooms/${roomId}`);
     setRoom(response.data);
     setTopCard(response.data.topCard);
     setStack(response.data.stack);
     setWinner(response.data.winner);
   } catch (error) {
     console.error('Error fetching room data:', error);
   }
 };

 const makeMove = async (action, cards = []) => {
   try {
     const response = await axios.post(`/api/rooms/${roomId}/move`, {
       userId: player.userId,
       action,
       cards,
     });
     setRoom(response.data.room);
     setTopCard(response.data.topCard);
     setStack(response.data.stack);
     setWinner(response.data.winner);
   } catch (error) {
     console.error('Error making move:', error);
   }
 }; 

 const pickCard = () => {
   makeMove('pick');
 };

 const dropCards = (cards) => {
   makeMove('drop', cards);
 };

 if (!room || !player) {
   return <div><l-ring size="60" color="coral"></l-ring></div>;
 }

 return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
     <div className="max-w-4xl px-4 py-8 bg-gray-800 rounded-lg shadow-lg">
       <h1 className="text-4xl font-bold mb-4">Room ID: {roomId}</h1>
       <div className="mb-6">
         <h2 className="text-2xl font-bold mb-2">Player: {player.username}</h2>
         <div className="flex flex-wrap">
           {player.hand.map((card, index) => (
             <div
               key={index}
               className="bg-gray-700 text-white py-2 px-4 rounded mr-2 mb-2"
             >
               {card}
             </div>
           ))}
         </div>
       </div>
       <div className="mb-6">
         <h2 className="text-2xl font-bold mb-2">Top Card</h2>
         <div className="bg-gray-700 text-white py-2 px-4 rounded">
           {topCard}
         </div>
       </div>
       <div className="mb-6">
         <h2 className="text-2xl font-bold mb-2">Stack</h2>
         <div className="flex flex-wrap">
           {stack.map((card, index) => (
             <div
               key={index}
               className="bg-gray-700 text-white py-2 px-4 rounded mr-2 mb-2"
             >
               {card}
             </div>
           ))}
         </div>
       </div>
       <div className="mb-6">
         <h2 className="text-2xl font-bold mb-2">Actions</h2>
         <div className="flex space-x-4">
           <button
             onClick={pickCard}
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
           >
             Pick Card
           </button>
           <button
             onClick={() => dropCards(player.hand.slice(0, 3))}
             className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
           >
             Drop Cards
           </button>
         </div>
       </div>
       {winner && (
         <div className="mb-6">
           <h2 className="text-2xl font-bold mb-2">Winner</h2>
           <div className="bg-green-500 text-white py-2 px-4 rounded">
             {winner.username}
           </div>
         </div>
       )}
     </div>
   </div>
 );
};

export default Room;