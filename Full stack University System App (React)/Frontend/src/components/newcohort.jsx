import React, { useState } from 'react';

const CreateCohortPage = () => {
  const [cohortData, setCohortData] = useState({
    id: '',
    year: '',
    degree: '',
    name: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCohortData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform API request to create a new cohort with cohortData
    fetch('http://127.0.0.1:8000/api/cohort/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cohortData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful response
        console.log('Cohort created:', data);
        // Reset cohortData to initial state
        setCohortData({
          id: '',
          year: '',
          degree: '',
          name: '',
        });
      })
      .catch((error) => console.error('Error creating cohort:', error));
  };

  return (
    <div className="CreateDegreePage container">
      <h1>Create New Cohort</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            value={cohortData.id}
            onChange={handleChange}
            className="form-control"
            id="id"
            placeholder="Enter ID"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            value={cohortData.year}
            onChange={handleChange}
            className="form-control"
            id="year"
            placeholder="Enter year"
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            value={cohortData.degree}
            onChange={handleChange}
            className="form-control"
            id="degree"
            placeholder="Enter degree"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={cohortData.name}
            onChange={handleChange}
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Create Cohort
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCohortPage;
