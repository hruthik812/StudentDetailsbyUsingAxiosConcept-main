import React, { useState } from "react";
import axios from "axios";
import "./getone.css"; // Import the CSS file

const GetOne = () => {
  const [id, setId] = useState(""); // Input state
  const [student, setStudent] = useState(null); // Data state
  const [error, setError] = useState(null); // Error handling

  const getData = async () => {
    if (!id) {
      setError("Please enter a Student ID");
      setStudent(null);
      return;
    }

    try {
      const res = await axios.get(`http://localhost:7000/getOne/${id}`);
      setStudent(res.data);
      setError(null);
    } catch (err) {
      setError("Student not found!");
      setStudent(null);
    }
  };

  return (
    <div className="getone-container">
      <h2>Get Student Data</h2>
      <input
        type="text"
        className="getone-input"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="getone-button" onClick={getData}>
        Get Student
      </button>

      {student && (
        <table className="getone-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Hibernate</th>
              <th>Spring</th>
              <th>Spring Boot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.sid}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.hibernate}</td>
              <td>{student.spring}</td>
              <td>{student.spring_boot}</td>
            </tr>
          </tbody>
        </table>
      )}

      {error && <p className="getone-result">{error}</p>}
    </div>
  );
};

export default GetOne;
