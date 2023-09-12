import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StudentPage = () => {
  const [student, setStudent] = useState(null);
  const [modules, setModules] = useState([]);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const { studentcode } = useParams();

  useEffect(() => {
    // Fetch student data from API
    fetch(`http://127.0.0.1:8000/api/student/${studentcode}`)
      .then(response => response.json())
      .then(data => {
        // Set student data and mark as loaded
        setStudent(data);
        setLoading(false);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
        setLoading(false);
      });
  }, [studentcode]); // Make sure to include studentcode as a dependency in useEffect

  useEffect(() => {
    // Fetch modules data
    fetch(`http://127.0.0.1:8000/api/module/`)
      .then(response => response.json())
      .then(data => {
        // Filter modules based on student's cohort value
        const filteredModules = data.filter(module => student && String(module.delivered_to) === student.cohort);
        setModules(filteredModules);
      })
      .catch(error => console.error('Error fetching modules:', error));
  }, [student]); // Make sure to include student as a dependency in useEffect

  useEffect(() => {
    // Fetch grades data for the student
    fetch(`http://127.0.0.1:8000/api/grade/?student=${studentcode}`)
      .then(response => response.json())
      .then(data => {
        // Filter grades based on student's cohort value
        const filteredGrades = data.filter(grade => student && grade.cohort === student.cohort);
        setGrades(filteredGrades);
      })
      .catch(error => console.error('Error fetching grades:', error));
  }, [student, studentcode]); // Make sure to include both student and studentcode as dependencies in useEffect

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!student) {
    return <div>Student not found</div>;
  }


  return (
    <div className="StudentPage">
      <h1 className="h1">View Student</h1>
      <div className="student-details">
        <p><strong>Student ID:</strong> {student.student_id}</p>
        <p><strong>First Name:</strong> {student.first_name}</p>
        <p><strong>Last Name:</strong> {student.last_name}</p>
        <p><strong>Cohort:</strong> {student.cohort}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>

      <h2>Modules for Student: {student.student_id}</h2>
      <ul>
        {modules.map(module => (
          <li key={module.module_id} className="moduleItem">
            <div className="moduleLink">
              Code: {module.code}
            </div>
            <div className="moduleInfo">
              <p className="moduleLabel">Full Name:</p>
              <p>{module.full_name}</p>
              <p className="moduleLabel">Delivered To:</p>
              <p>{module.delivered_to}</p>
              <p className="moduleLabel">CA Split:</p>
              <p>{module.ca_split}</p>
            </div>
          </li>
        ))}
      </ul>
      <h2>Grades for Student: {student.student_id}</h2>
    <ul>
      {grades.map(grade => (
        <li key={grade.grade_id} className="moduleItem">
          <div className="moduleLink">
            <p className="moduleLabel">Module Name:</p>
            <p>{grade.module}</p>
            <p className="moduleLabel">Ca Mark:</p>
            <p>{grade.ca_mark}</p>
            <p className="moduleLabel">Final Mark:</p>
            <p>{grade.exam_mark}</p>
            <p className="moduleLabel">Grade:</p>
            <p>{grade.total_grade}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

};

export default StudentPage;