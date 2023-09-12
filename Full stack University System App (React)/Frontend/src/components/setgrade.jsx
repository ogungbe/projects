import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SetGradePage = () => {
  const { studentcode, grade_id } = useParams();
  const [caMark, setCaMark] = useState(0);
  const [examMark, setExamMark] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fetch to update CA and exam marks in API

    fetch(`http://127.0.0.1:8000/api/grade/${grade_id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "ca_mark" : parseInt(caMark),
        "exam_mark" : parseInt(examMark)
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response data as needed
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Set Grade Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="caMark">CA Mark:</label>
        <input
          type="number"
          id="caMark"
          value={caMark}
          onChange={(event) => setCaMark(event.target.value)}
        />
        <br />
        <label htmlFor="examMark">Exam Mark:</label>
        <input
          type="number"
          id="examMark"
          value={examMark}
          onChange={(event) => setExamMark(event.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SetGradePage;
