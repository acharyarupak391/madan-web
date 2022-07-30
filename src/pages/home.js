import React from "react";
import "./home.css";
import brain from "../assets/brain.svg";
import logo from "../assets/madon_logo.svg";

function Home() {
  return (
    <div className="main-container">
      <div className="navbar">
        <div className="left-navbar">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
      </div>

      <div className="flex-container">
        <div className="img-container">
          <img src={brain} alt="brain" />
        </div>

        <div className="container">
          <div className="left-container">
            Under Brainstorming Session
            <p className="text-desc">
              👋 Hi, this is Madan. The website is under development. Meanwhile,
              don’t forget to drink water (not related but important).
            </p>
            <form method="GET">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required="required"
              />
              <input
                type="text"
                name="user_message"
                placeholder="Your message"
                required="required"
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
