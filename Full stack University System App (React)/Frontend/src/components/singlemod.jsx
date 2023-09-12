import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './singlemod.css'; // Import the CSS file for styling

const SingleModulePage = () => {
  const { modulecode } = useParams(); // Access the modulecode parameter from the URL
  const [module, setModule] = useState(null);

  // Fetch module data using the modulecode parameter
  useEffect(() => {
    // Fetch single module from the backend API using the modulecode parameter
    fetch(`http://127.0.0.1:8000/api/module/${modulecode}/`)
      .then(response => response.json())
      .then(data => setModule(data))
      .catch(error => console.error(`Error fetching module ${modulecode}:`, error));
  }, [modulecode]);

  // Render module data or loading message
  if (!module) {
    return <div>Loading...</div>;
  }

  return (
    <div className="moduleItem"> {/* Apply the moduleItem class for the container */}
      <h1 className="h1">Module Details</h1>
      <p>
        <span className="moduleLabel">Code:</span> {module.code}<br />
        <span className="moduleLabel">Full Name:</span> {module.full_name}<br />
        <span className="moduleLabel">Delivered To:</span> {module.delivered_to}<br />
        <span className="moduleLabel">CA Split:</span> {module.ca_split}
      </p>
    </div>
  );
};

export default SingleModulePage;
