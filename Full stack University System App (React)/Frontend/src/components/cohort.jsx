import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CohortPage = () => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    // Fetch cohorts from the backend API
    fetch('http://127.0.0.1:8000/api/cohort/')
      .then(response => response.json())
      .then(data => setCohorts(data))
      .catch(error => console.error('Error fetching cohorts:', error));
  }, []);

  return (
    <div>
      <h1>Cohort List</h1>
      <ul>
        {cohorts.map(cohort => (
          <li key={cohort.id}>
            <Link to={`/cohort/${cohort.id}`}>{cohort.id}: {cohort.year} Year {cohort.degree.full_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CohortPage;
