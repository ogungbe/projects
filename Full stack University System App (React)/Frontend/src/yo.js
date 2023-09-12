import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import DegreesPage from './components/Degreepage';
import SingleDegreePage from './components/singledeg';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DegreesPage />} />
        <Route path="/degree/:shortcode" element={<SingleDegreePage />} /> {/* Route for single degree page */}
      </Routes>
    </Router>
  );
}

export default App;
