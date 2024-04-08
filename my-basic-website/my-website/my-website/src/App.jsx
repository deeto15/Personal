import React, { useState, useEffect } from 'react';
import './App.css';
import WTLChart from './components/WTLChart';
import { smoothScrollToTarget } from './scrolling';

function App() {
  smoothScrollToTarget();
  const [catPictureUrl, setCatPictureUrl] = useState('');
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    getCatPicture();
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  function getCatPicture() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const catUrl = data[0].url;
        setCatPictureUrl(catUrl);
      })
      .catch(error => {
        console.error('Error fetching cat picture:', error);
      });
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const dueDate = new Date('2024-04-07T23:59:59').getTime(); // Due date: April 7, 2024
    const timeDifference = dueDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
      setCountdown("Time's up! Hope it got submitted in time!");
    }
  }

  return (
    <div className="App">
      <main>
        <h2>Assignment Countdown</h2>
        <p id="countdown">{countdown}</p>

        <section>
          <h2>Website Content</h2>
          <p>This is the guts of my website. I decided to build this page because it is my project for Distributed Web Systems. In the top is a counter that is ticking down until the next assignment is due.</p>
          <p>At the bottom is a chart displaying my interest in school as the semester goes on.</p>
          <WTLChart />
        </section>
      </main>
    </div>
  );
}

export default App;
