import React, { useEffect, useState } from "react";
import axios from "axios";
import "./getall.css"; // Import the CSS file

const GetAll = () => {
  const [students, setStudents] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:7000/getAll");
      console.log(res);
      console.log(res.data);
      
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="getall-container">
      <h2>All Students Data</h2>
      <table className="getall-table">
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
          {students.map((student,index) => (
            <tr key={index}>
              <td>{student.sid}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.hibernate}</td>
              <td>{student.spring}</td>
              <td>{student.spring_boot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAll;
