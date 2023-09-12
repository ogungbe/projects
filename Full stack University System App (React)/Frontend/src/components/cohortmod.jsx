import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CohortModulePage = () => {
  const [modules, setModules] = useState([]);
  const { cohortCode } = useParams(); // Access the cohortCode URL parameter using useParams

  useEffect(() => {
    // Fetch modules for the given cohort code from the backend API
    fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohortCode}`)
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.error('Error fetching modules:', error));
  }, [cohortCode]); // Make sure to include cohortCode as a dependency in useEffect

  return (
    <div>
      <h1>Modules for Cohort: {cohortCode}</h1>
      <ul>
        {modules.map(module => (
          <li key={module.code}>
            Code: {module.code}<br />
            Full Name: {module.full_name}<br />
            Delivered To: {module.delivered_to}<br />
            CA Split: {module.ca_split}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CohortModulePage;
