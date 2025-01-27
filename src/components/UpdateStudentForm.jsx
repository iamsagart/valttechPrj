import React, { useState } from "react";
import { updateStudent } from "../services/api";

const UpdateStudentForm = ({ student }) => {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(formData);
    alert("Student updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Student</h2>
      <input name="id" value={formData.id} disabled />
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="cont" value={formData.cont} onChange={handleChange} />
      <input name="address" value={formData.address} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateStudentForm;
