import React, { useEffect } from 'react';
import './Box.css';

const FloatingCircles = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
      circle.addEventListener('animationiteration', () => {
        const rect1 = circle.getBoundingClientRect();
        
        circles.forEach(otherCircle => {
          if (otherCircle !== circle) {
            const rect2 = otherCircle.getBoundingClientRect();

            const dx = rect1.left + rect1.width / 2 - (rect2.left + rect2.width / 2);
            const dy = rect1.top + rect1.height / 2 - (rect2.top + rect2.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < rect1.width / 2 + rect2.width / 2) {
              circle.style.transform = 'scale(2)';
              setTimeout(() => {
                circle.style.transform = 'scale(1)';
              }, 500); // Change size back to normal after 500ms
            }
          }
        });
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="circle one"></div>
      <div className="circle two"></div>
      <div className="circle three"></div>
      <div className="circle four"></div>
    </div>
  );
};

export default FloatingCircles;
