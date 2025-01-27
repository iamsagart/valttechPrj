import React, { useState } from "react";
import { addStudent } from "../services/api";

const AddStudentForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    cont: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input name="id" placeholder="ID" onChange={handleChange} />
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="cont" placeholder="Contact" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStudentForm;
