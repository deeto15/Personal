import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    displayName: "Home",
    link: "/",
  },
  {
    displayName: "About",
    link: "/about",
  },
  {
    displayName: "Posts",
    link: "/posts",
  },
];

function Navbar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition === 0) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      if (scrollPosition + windowHeight >= documentHeight) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="navbar"
    >
      <header className="header-container" style={{ display: isHeaderVisible ? "block" : "none" }}>
        <h1>Welcome to My Basic Website</h1>
        <nav>
          {navLinks.map(({ displayName, link }, idx) => (
            <Link to={link} key={idx}>
              <button
                style={{
                  color: "white",
                  backgroundColor:
                    pathname === link ? "rgb(127, 166, 208)" : "#555",
                  margin: "5px",
                }}
              >
                {displayName}
              </button>
            </Link>
          ))}
        </nav>
      </header>
        <footer id="footer">
          <form id="contactForm" action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
          <div id="formMessage"></div>

          <p>&copy; 2024 Kendall Eberly | <a href="mailto:ke05739@georgiasouthern.edu">ke05739@georgiasouthern.edu</a></p>
        </footer>
    </div>
  );
}

export default Navbar;
