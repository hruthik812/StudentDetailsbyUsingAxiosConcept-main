import axios from "axios";
import { useRef, useState } from "react";

const DeleteOperation = () => {
  const [num, setNum] = useState(null); // Holds delete response status
  const ref1 = useRef(null); // Reference for input field

  const deleteData = async () => {
    try {
      const res = await axios.delete(`http://localhost:9000/delete/${ref1.current.value}`);
      setNum(res.status); // Store response status
    } catch (error) {
      console.error("Error deleting record:", error);
      setNum("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", border: "2px solid red", margin: "40px auto", padding: "20px", width: "300px" }}>
      <input type="text" ref={ref1} placeholder="Enter ID to delete" />
      <br /><br />
      <button onClick={deleteData}>Delete Record</button>
      <p>Response Status: {JSON.stringify(num)}</p>
    </div>
  );
};

export default DeleteOperation;
