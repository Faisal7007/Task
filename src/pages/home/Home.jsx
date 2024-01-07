import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS for styling

const CardPage = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > (window.lastScrollPosition || 0)) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    window.lastScrollPosition = currentPosition <= 0 ? 0 : currentPosition;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card-container">
      <div className={`card ${scrollDirection === 'down' ? 'anticlockwise' : 'clockwise'} card1`}>Card 1</div>
      <div className={`card ${scrollDirection === 'down' ? 'anticlockwise' : 'clockwise'} card2`}>Card 2</div>
      <div className={`card ${scrollDirection === 'down' ? 'clockwise' : 'anticlockwise'} card3`}>Card 3</div>
      <div className={`card ${scrollDirection === 'down' ? 'clockwise' : 'anticlockwise'} card4`}>Card 4</div>
    </div>
  );
};

export default CardPage;
