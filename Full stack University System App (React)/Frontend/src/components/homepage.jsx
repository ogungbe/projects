import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; // Import your homepage styles here
import degreeImage from './degree.png'; // Import the degree image
import moduleImage from './modules.png';
import cohortImage from './cohorts.png';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to University System</h1>
          <p>Your one-stop solution for managing degrees, cohorts, and modules</p>
          <div className="cta-buttons">
            <Link to="/" className="cta-button">Login</Link>
            <Link to="/" className="cta-button">Sign Up</Link>
          </div>
        </div>
      </header>
      <section className="features-section">
        <div className="container">
          <h2>Our Features</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <img src={degreeImage} alt="Degrees" />
              <h3>Degrees</h3>
              <p>Manage degree programs offered by your university, including adding, editing, and deleting degrees.</p>
              <Link to="/degreespage" className="cta-button">Learn More</Link>
            </div>
            <div className="feature-card">
              <img src={cohortImage} alt="Cohorts" />
              <h3>Cohorts</h3>
              <p>Create and manage cohorts for each degree program, assign students, and track their progress.</p>
              <Link to="/cohort" className="cta-button">Learn More</Link>
            </div>
            <div className="feature-card">
              <img src={moduleImage} alt="Modules" />
              <h3>Modules</h3>
              <p>Add, update, and delete modules for each degree program, and track module completion status.</p>
              <Link to="/module" className="cta-button">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Join us now and streamline your university's academic management with ease!</p>
          <Link to="/signup" className="cta-button">Sign Up</Link>
        </div>
      </section>
      <footer className="footer-section">
        <div className="container">
          <p>&copy; 2023 University System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
