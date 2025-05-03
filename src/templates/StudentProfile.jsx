import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StudentProfile() {
  const { username, password } = useParams();
  const [searchedStudent, setSearchedStudent] = useState(null);

  useEffect(() => {
    if (username && password) {
      axios.get(`http://localhost:9191/getsingledata/${username}/${password}`)
        .then(res => {
          setSearchedStudent(res.data);
        })
        .catch(err => {
          console.error("Student not found:", err);
          setSearchedStudent(null);
        });
    }
  }, [username, password]);

  return (
    <div className="container mt-4">
      <h2 className="text-secondary mb-4">Student Profile</h2>
      {searchedStudent ? (
        <div className="card p-4 shadow-sm">
          <h5 className="mb-3">Student Found:</h5>
          <p><strong>Name:</strong> {searchedStudent.name}</p>
          <p><strong>Marks:</strong> {searchedStudent.marks}</p>
          <p><strong>Username:</strong> {searchedStudent.username}</p>
          <p><strong>Password:</strong> {searchedStudent.password}</p>
          <p><strong>Location:</strong> {searchedStudent.adr.location}</p>
          <p><strong>Pincode:</strong> {searchedStudent.adr.pincode}</p>
          <p><strong>Landmark:</strong> {searchedStudent.adr.landmark}</p>
        </div>
      ) : (
        <p className="text-danger">No student data found or incorrect credentials.</p>
      )}
    </div>
  );
}

export default StudentProfile;
