import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CohortDetailPage = () => {
  const { cohortFlag } = useParams();
  const [cohort, setCohort] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the cohort details
    fetch(`http://127.0.0.1:8000/api/cohort/${cohortFlag}`)
      .then(response => response.json())
      .then(data => setCohort(data))
      .catch(error => console.error('Error fetching cohort details:', error));

    // Fetch the students in the cohort
    fetch(`http://127.0.0.1:8000/api/student/?cohort=${cohortFlag}`)
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, [cohortFlag]);

  if (!cohort) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cohort Details</h1>
      <p>ID: {cohort.id}</p>
      <p>Year: {cohort.year}</p>
      <p>Degree: {cohort.degree}</p>
      <h2>Students in Cohort</h2>
      {students.length === 0 ? (
        <p>No students in this cohort.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.student_id}>
              {student.first_name} {student.last_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CohortDetailPage;
