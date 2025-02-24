import React, { useState } from "react";
import axios from "axios";
import "./update.css"; // Import CSS

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [hibernate, setHibernate] = useState("");
  const [spring, setSpring] = useState("");
  const [springBoot, setSpringBoot] = useState("");
  const [message, setMessage] = useState("");

  const updateData = async () => {
    if (!id) {
      setMessage("Please enter a Student ID to update.");
      return;
    }

    try {
      const updatedStudent = {
        name,
        course,
        hibernate: Number(hibernate),
        spring: Number(spring),
        spring_boot: Number(springBoot),
      };

      const res = await axios.put(`http://localhost:7000/update/${id}`, updatedStudent);
      setMessage("Student data updated successfully!");
    } catch (error) {
      setMessage("Error updating student data.");
    }
  };

  return (
    <div className="update-container">
      <h2>Update Student Data</h2>
      <input
        type="text"
        className="update-input"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        className="update-input"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="update-input"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        type="number"
        className="update-input"
        placeholder="Enter Hibernate Marks"
        value={hibernate}
        onChange={(e) => setHibernate(e.target.value)}
      />
      <input
        type="number"
        className="update-input"
        placeholder="Enter Spring Marks"
        value={spring}
        onChange={(e) => setSpring(e.target.value)}
      />
      <input
        type="number"
        className="update-input"
        placeholder="Enter Spring Boot Marks"
        value={springBoot}
        onChange={(e) => setSpringBoot(e.target.value)}
      />
      <br />
      <button className="update-button" onClick={updateData}>
        Update
      </button>

      {message && <p className="update-result">{message}</p>}
    </div>
  );
};

export default Update;
