import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Homepage;
