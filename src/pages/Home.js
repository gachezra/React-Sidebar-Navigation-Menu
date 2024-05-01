import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
 return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
     <div className="max-w-4xl px-4 py-8 bg-gray-800 rounded-lg shadow-lg">
       <h1 className="text-4xl font-bold mb-4">Welcome to Poker Game</h1>
       <p className="text-lg mb-6">
         Poker is a classic card game that involves skill, strategy, and a bit
         of luck. Here, you can enjoy a thrilling poker experience with players
         from around the world.
       </p>
       <h2 className="text-2xl font-bold mb-2">How to Play</h2>
       <ol className="list-decimal list-inside mb-6">
         <li>
           <span className="font-bold">Learn the Rules:</span> Familiarize
           yourself with the rules of poker, including hand rankings, betting
           structures, and game variations.
         </li>
         <li>
           <span className="font-bold">Join a Table:</span> Choose your desired
           game and stake level, then join a table with other players.
         </li>
         <li>
           <span className="font-bold">Play Your Cards:</span> Use strategy,
           bluffing, and your poker skills to outsmart your opponents and build
           the best hand.
         </li>
         <li>
           <span className="font-bold">Collect Your Winnings:</span> If you
           have the best hand at the end of the round, you'll win the pot and
           collect your winnings.
         </li>
       </ol>
       <div className="flex justify-center">
         <Link to={'/rooms'}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Join Now
            </button>
         </Link>
       </div>
     </div>
   </div>
 );
}

export default Home;