import React, { useState } from 'react';

function CreateDegreePage() {
  const [degreeData, setDegreeData] = useState({
    full_name: '',
    shortcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDegreeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send API request to create a new degree using degreeData
    fetch('http://127.0.0.1:8000/api/degree/', {
      method: 'POST',
      body: JSON.stringify(degreeData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response data
        console.log('Response data:', data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
    // Clear form data
    setDegreeData({
      full_name: '',
      shortcode: '',
    });
  };

  return (
    <div className="CreateDegreePage container">
      <h1>Create New Degree</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={degreeData.full_name}
            onChange={handleChange}
            className="form-control"
            id="full_name"
            placeholder="Enter full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="shortcode">Shortcode</label>
          <input
            type="text"
            name="shortcode"
            value={degreeData.shortcode}
            onChange={handleChange}
            className="form-control"
            id="shortcode"
            placeholder="Enter shortcode"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Degree</button>
      </form>
    </div>
  );
}

export default CreateDegreePage;
