import React, { useState, useRef } from "react";
import axios from "axios";
import "./insert.css"; // Import your custom CSS

const Insert = () => {
  // Refs for each input field
  const nameRef = useRef(null);
  const courseRef = useRef(null);
  const hibernateRef = useRef(null);
  const springRef = useRef(null);
  const springBootRef = useRef(null);

  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    try {

        if(!(nameRef && courseRef && hibernateRef && springRef && springBootRef)){ 
            alert("Fill details")
            return 
        }
      const dataToPost = {
        name: nameRef.current.value,
        course: courseRef.current.value,
        hibernate: Number(hibernateRef.current.value),
        spring: Number(springRef.current.value),
        spring_boot: Number(springBootRef.current.value),
      };

      const response = await axios.post("http://localhost:7000/save", dataToPost);
      setResponseData(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
<div className="main">

    <div className="insert-container">
  
      <h2>Post Student Data</h2>

      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} placeholder="Enter Name" />
      </div>
      <div>
        <label>Course:</label>
        <input type="text" ref={courseRef} placeholder="Enter Course" />
      </div>
      <div>
        <label>Hibernate:</label>
        <input type="number" ref={hibernateRef} placeholder="Enter Hibernate marks" />
      </div>
      <div>
        <label>Spring:</label>
        <input type="number" ref={springRef} placeholder="Enter Spring marks" />
      </div>
      <div>
        <label>Spring Boot:</label>
        <input type="number" ref={springBootRef} placeholder="Enter Spring Boot marks" />
      </div>

      <button onClick={postData}>Submit</button>

      {responseData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
    </div>

  );
};

export default Insert;
