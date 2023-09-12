import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './degp.css';


function DegreesPage() {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/")
      .then(response => response.json())
      .then(data => {
        setDegrees(data);
        console.log(data);
      });
  }, []);

  const displayDegrees = () => {
    if (degrees.length === 0) {
      return <p>Loading...</p>;
    } else {
      return degrees.map(degree => (
        <li key={degree.shortcode}>
          <Link to={`/degree/${degree.shortcode}`}>{degree.full_name}</Link>
        </li>
      ));
    }
  };
  

  return (
    <div className="DegreesPage">
      <h1>Degree list</h1>
      <ul>
        {displayDegrees()}
      </ul>
    </div>
  );
}

export default DegreesPage;
