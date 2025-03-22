import React from 'react';
import Spline from '@splinetool/react-spline';
import './home.css'; 

const Home = () => {
  return (
    <div className="home">

      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">CareerConnect</span>
        </div>
        <div className="nav-right">
          <button className="sign-in">Sign In</button>
          <button className="get-started">Get Started</button>
        </div>
      </nav>

      {/* Spline Scene */}
      <main>
        <Spline scene="https://prod.spline.design/aTzWQXfvsPVUS2At/scene.splinecode" />
      </main>


      <footer className="footer">
        <p>© 2023 CareerConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;