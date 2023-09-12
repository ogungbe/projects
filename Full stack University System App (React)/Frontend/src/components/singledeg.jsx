import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleDegreePage() {
  const { shortcode } = useParams();
  const [degree, setDegree] = useState(null);
  const [cohorts, setCohorts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fetch degree information
    fetch(`http://127.0.0.1:8000/api/degree/?shortcode=${shortcode}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 1) {
          setDegree(data[0]);
        }
      });
  
    // Fetch all cohorts that have the same degree value
    fetch(`http://127.0.0.1:8000/api/cohort/?degree__shortcode=${shortcode}`)
      .then(response => response.json())
      .then(data => {
        setCohorts(data);
        setIsLoaded(true);
      });
  }, [shortcode]);

  const displayDegreeInfo = () => {
    if (degree) {
      return (
        <div>
          <h1>{degree.full_name}</h1>
          <p>Shortcode: {degree.shortcode}</p>
        </div>
      );
    }
  };

  const displayCohortsByYear = (year) => {
    const yearCohorts = cohorts.filter(cohort => {
      const lastSegment = cohort.degree.split('/').filter(segment => segment !== '').pop();
      return parseInt(cohort.name.charAt(0)) === year && lastSegment === shortcode;
    });
  
    const renderYearCohorts = (year, cohorts) => (
      <div>
        <h2>{year} Year</h2>
        <ul>
          {cohorts.map(cohort => (
            <li key={cohort.id}>
              Cohort ID: {cohort.id}, Year: {year}, Degree: {cohort.degree}, Name: {cohort.name}
            </li>
          ))}
        </ul>
      </div>
    );
  
    return renderYearCohorts(year, yearCohorts);
  };

  if (isLoaded) {
    return (
      <div className="SingleDegreePage">
        {displayDegreeInfo()}
        {displayCohortsByYear(1)}
        {displayCohortsByYear(2)}
        {displayCohortsByYear(3)}
        {displayCohortsByYear(4)}
      </div>
    );
  } else {
    return (
      <div className="SingleDegreePage">
        <img src="load.jpeg" alt="Loading p" />
      </div>
    );
  }
}

export default SingleDegreePage;
