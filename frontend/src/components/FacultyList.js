import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FacultyList() {
  const [faculties, setFaculties] = useState([]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [age, setAge] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL_FACULTIES;

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get(API_URL);
      setFaculties(response.data);
    } catch (error) {
      console.error("Error fetching faculties:", error);
    }
  };

  const saveFaculty = async () => {
    try {
      const facultyData = { name, department, age };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, facultyData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, facultyData);
      }

      setName('');
      setDepartment('');
      setAge('');
      fetchFaculties();
    } catch (error) {
      console.error("Error saving faculty:", error);
    }
  };

  const deleteFaculty = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchFaculties();
    } catch (error) {
      console.error("Error deleting faculty:", error);
    }
  };

  const editFaculty = (faculty) => {
    setEditingId(faculty._id);
    setName(faculty.name);
    setDepartment(faculty.department);
    setAge(faculty.age);
  };

  return (
    <div>
      <h2>Faculty List</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={saveFaculty}>
        {editingId ? "Update Faculty" : "Add Faculty"}
      </button>
      <ul>
        {faculties.map(faculty => (
          <li key={faculty._id}>
            {faculty.name} - Department: {faculty.department}, Age: {faculty.age}
            <button onClick={() => editFaculty(faculty)}>Edit</button>
            <button onClick={() => deleteFaculty(faculty._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyList;