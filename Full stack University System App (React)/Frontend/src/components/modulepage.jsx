import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './modulepage.css';

const ModulePage = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    // Fetch modules from the backend API
    fetch('http://127.0.0.1:8000/api/module/')
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.error('Error fetching modules:', error));
  }, []);

  return (
    <div className="modulepage">
      <h1 className="moduleLink">Module List</h1>
      <ul>
        {modules.map(module => (
          <li key={module.code} className="moduleItem">
            {/* Create a link to SingleModulePage with the corresponding module code */}
            <Link to={`/module/${module.code}`} className="moduleLink">{module.code}</Link>
            <br />
            <div className="moduleInfo">
              <span className="moduleLabel">Full Name: </span>{module.full_name}<br />
              <span className="moduleLabel">Delivered To: </span>
              <div className="moduleDeliveredTo">{module.delivered_to}</div>
              <br />
              <span className="moduleLabel">CA Split: </span>{module.ca_split}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulePage;
