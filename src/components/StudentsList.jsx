import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/api";

const StudentsList = ({ onEdit }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <div>
            <p><strong>Id:</strong> {student.id}</p>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Contact:</strong> {student.cont}</p>
              <p><strong>Address:</strong> {student.address}</p>
            </div>
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
