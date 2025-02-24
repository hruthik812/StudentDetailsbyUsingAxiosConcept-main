import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./delete.css"; // Importing CSS

const Delete = () => {
    const [students, setStudents] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:7000/getAll");
            setStudents(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const deleteRecord = async (sid) => {
        if (!window.confirm("Are you sure you want to delete this record?")) {
            return;
        }

        try {
            await axios.delete(`http://localhost:7000/delete/${sid}`);
            getData(); // Refresh data after deletion
        } catch (error) {
            console.error("Error deleting record:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="delete-container">
            <h2>Student Records</h2>
            
            {students.length === 0 ? (
                <p className="no-data">No student data available.</p>
            ) : (
                <table className="delete-table">
                    <thead>
                        <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Hibernate</th>
                        <th>Spring</th>
                        <th>Spring Boot</th>
                        <th>Delete</th>
                        <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.sid}>
                                <td>{student.sid}</td>
                                <td>{student.name}</td>
                                <td>{student.course}</td>
                                <td>{student.hibernate}</td>
                                <td>{student.spring}</td>
                                <td>{student.spring_boot}</td>

                                <td>
                                <button className="delete-button" onClick={() => deleteRecord(student.sid)}>
                                    Delete
                                </button>
                            </td>


                            <td> <button> <Link to="/update" style={{ color: "black", textDecoration: "none" }}>Update</Link></button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Delete;
