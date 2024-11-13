import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import StudentList from './components/StudentList';
import FacultyList from './components/FacultyList'; // Import FacultyList
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/students" element={<StudentList />} />
          <Route path="/faculties" element={<FacultyList />} /> {/* Add Faculty route */}
          <Route path="/" element={<StudentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;