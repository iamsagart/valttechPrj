import React, { useState } from "react";
import StudentsList from "../components/StudentsList";
import AddStudentForm from "../components/AddStudentForm";
import UpdateStudentForm from "../components/UpdateStudentForm";
import StudentDetails from "../components/StudentDetails";

const HomePage = () => {
  const [editStudent, setEditStudent] = useState(null);

  return (
    <div>
      <h1>Student Management App</h1>
      <StudentsList onEdit={(student) => setEditStudent(student)} />
      {editStudent ? (
        <UpdateStudentForm student={editStudent} />
      ) : (
        <AddStudentForm onAdd={() => window.location.reload()} />
      )}
      <StudentDetails />
    </div>
  );
};

export default HomePage;
