import React, { useState } from 'react';

const CreateStudentPage = () => {
  const [studentData, setStudentData] = useState({
    student_id: '',
    first_name: '',
    last_name: '',
    cohort: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send API request to create a new student using studentData
    fetch('http://127.0.0.1:8000/api/student/', {
      method: 'POST',
      body: JSON.stringify(studentData),
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
    setStudentData({
      student_id: '',
      first_name: '',
      last_name: '',
      cohort: ''
    });
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Create New Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="student_id">Student ID:</label>
          <input
            type="text"
            name="student_id"
            value={studentData.student_id}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={studentData.first_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={studentData.last_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cohort">Cohort:</label>
          <input
            type="text"
            name="cohort"
            value={studentData.cohort}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Student</button>
      </form>
    </div>
  );
};

export default CreateStudentPage;
