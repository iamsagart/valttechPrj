import React, { useState } from "react";
import { getStudentById } from "../services/api";

const StudentDetails = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);

  const fetchStudent = async () => {
    const data = await getStudentById(studentId);
    if (data && data.length > 0) {
      setStudent(data[0]);  // Set the first student from the array
    } else {
      setStudent(null);  // Clear student data if no result is found
    }
  };

  return (
    <div>
      <h2>Find Student</h2>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={fetchStudent}>Search</button>

      {student ? (
        <div>
          <h3>Details:</h3>
          <p>Name: {student.name}</p>
          <p>Contact: {student.cont}</p>
          <p>Address: {student.address}</p>
        </div>
      ) : (
        <p>No student found</p>
      )}
    </div>
  );
};

export default StudentDetails;

