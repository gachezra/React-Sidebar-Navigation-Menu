import React from 'react';
import image from '../images/unnamed';

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <img src={image} alt="image" />
    </div>
  );
}

export default Home;
