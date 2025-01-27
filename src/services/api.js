// src/services/api.js
import axios from "axios";

const BASE_URL = "http://localhost:4000"; // Replace with your backend URL

export const getStudents = async () => {
  const response = await axios.get(`${BASE_URL}/students`);
  return response.data;
};

export const getStudentById = async (id) => {
  const response = await axios.get(`${BASE_URL}/students/${id}`);
  return response.data;
};

export const addStudent = async (student) => {
  const response = await axios.post(`${BASE_URL}/students`, student);
  return response.data;
};

export const updateStudent = async (student) => {
  const response = await axios.put(`${BASE_URL}/students`, student);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axios.delete(`${BASE_URL}/students/${id}`);
  return response.data;
};
