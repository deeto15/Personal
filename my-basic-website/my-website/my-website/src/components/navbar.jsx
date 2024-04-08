import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";

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
  const { pathname } = useLocation();
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [isFooterVisible, setFooterVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const buffer = 100;
    
      if (offset < buffer || offset + windowHeight > documentHeight - buffer) {
        setHeaderVisible(true);
        setFooterVisible(true);
      } else if (offset > buffer && offset + windowHeight < documentHeight - buffer) {
        setHeaderVisible(false);
        setFooterVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header-container");
    const logo = document.getElementById("logo");

    function handleMouseEnter() {
      header.style.backgroundColor = "#555";
    }

    function handleMouseLeave() {
      header.style.backgroundColor = "rgb(127, 166, 208)";
    }

    header.addEventListener("mouseenter", handleMouseEnter);
    header.addEventListener("mouseleave", handleMouseLeave);

    anime({
      targets: logo,
      translateY: [{ value: -20, duration: 500 }, { value: 0, duration: 800 }],
      loop: true,
    });

    return () => {
      header.removeEventListener("mouseenter", handleMouseEnter);
      header.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHeaderVisible]);

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
      {isFooterVisible && (
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
      )}
    </div>
  );
}

export default Navbar;
