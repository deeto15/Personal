import React, { useState, useEffect } from 'react';
import './about.css';
import { smoothScrollToTarget } from '../../scrolling';
function About() {
  smoothScrollToTarget();
  const [catPictureUrl, setCatPictureUrl] = useState('');

  useEffect(() => {
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

  function handleButtonClick() {
    getCatPicture();
  }

  return (
    <div>
      <main>
        <section>
          <h2>Introduction</h2>
          <p>Hello! My name is Kendall Eberly, and I like to do a lot of things.</p>
        </section>

        <section>
          <h2>Background</h2>
          <p>I have a background in Computer Science. I did an internship with a Fortune 50 Company, and I have also done undergraduate research work at Georgia Southern University.</p>
        </section>

        <section>
          <h2>Interests</h2>
          <p>Some of my interests include Muay Thai, Jujitsu, Neo-Classical and Metal Guitar, and Tennis. I also really like cats. </p>
          <button className="cat-btn" onClick={handleButtonClick}>Display Cat</button>
          <img id="catPicture" src={catPictureUrl} alt="A cat" style={{ display: catPictureUrl ? 'block' : 'none' }} />
        </section>

        <section>
          <h2>Contact</h2>
          <p>My contact information is at the bottom of the page, feel free to contact me.</p>
        </section>
      </main>
      <footer id="footer">
        <form id="contactForm" action="#" method="post">
          <label>Name:</label>
          <input type="text" id="name" name="name" required/>

          <label>Email:</label>
          <input type="email" id="email" name="email" required/>

          <label>Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
        <div id="formMessage"></div>

        <p>&copy; 2024 Kendall Eberly | <a href="mailto:ke05739@georgiasouthern.edu">ke05739@georgiasouthern.edu</a></p>
      </footer>
    </div>
  );
}

export default About;
