// import { useState } from 'react';
import profile1 from './assets/img/profile-1.jpg';
// import profile2 from './assets/img/profile-2.png';
// import linkedin from './assets/svg/linkedin.svg';
// import github from './assets/svg/github.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <img className="profile" src={profile1} alt="" />
          {/* <img className="profile" src={profile2} alt="" /> */}
        </div>
        <div className="hero-text">
          <h1>Burhanu Sultan Ramadan</h1>
          <p>{'> '}Full Stack Developer</p>
          <p>{'> '}I love learning new thing</p>
          <div className="hero-btn">
            <a className="contact-me" href="#">
              Contact Me
            </a>
            <a
              className="icon linkedin"
              href="https://www.linkedin.com/in/burhanusr/"
            ></a>
            <a className="icon github" href="https://github.com/burhanusr"></a>
          </div>
        </div>
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <svg>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
            <feColorMatrix
              in="colorNoise"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
            />
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
            <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
          </filter>
        </svg>
        <div className="gradient-container">
          <div className="g1"></div>
          <div className="g2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
