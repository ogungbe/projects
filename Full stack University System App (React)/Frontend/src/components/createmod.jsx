import React, { useState } from 'react';

const CreateModulePage = () => {
  const [moduleData, setModuleData] = useState({
    code: '',
    full_name: '',
    delivered_to: [],
    ca_split: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'delivered_to') {
      // Convert delivered_to value to an array of items
      const items = value.split(',').map(item => item.trim());
      setModuleData(prevData => ({
        ...prevData,
        [name]: items
      }));
    } else {
      setModuleData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send API request to create a new module using moduleData
    fetch('http://127.0.0.1:8000/api/module/', {
      method: 'POST',
      body: JSON.stringify(moduleData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data
        console.log('Response data:', data);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });

    // Clear form data
    setModuleData({
      code: '',
      full_name: '',
      delivered_to: [],
      ca_split: 0
    });
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Create New Module</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="code">Module Code:</label>
          <input
            type="text"
            name="code"
            value={moduleData.code}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="full_name">Module Name:</label>
          <input
            type="text"
            name="full_name"
            value={moduleData.full_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="delivered_to">Delivered To:</label>
          <input
            type="text"
            name="delivered_to"
            value={moduleData.delivered_to.join(', ')}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ca_split">Module Split:</label>
          <input
            type="number"
            name="ca_split"
            value={moduleData.ca_split}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Module</button>
      </form>
    </div>
  );
};

export default CreateModulePage;
