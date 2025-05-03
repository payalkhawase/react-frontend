import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function StudentList() {
    
  const { register, handleSubmit, reset } = useForm();

  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [searchedStudent, setSearchedStudent] = useState(null);

  
  const getAllStudents = () => {
    axios.get('http://localhost:9191/getData')
      .then(res => setStudents(res.data))
      .catch(err => console.error('Error fetching students:', err));
  };

  useEffect(() => {
    getAllStudents(); 
  }, []);

 
  const onSubmit = (data) => {
    axios.post('http://localhost:9191/add', data)
      .then(res => {
        console.log('Student saved:', res.data);
        getAllStudents(); 
        reset(); 
      })
      .catch(err => console.error('Error saving student:', err));
  };

  
  const fetchStudentById = () => {
    if (!studentId) return;

    axios.get(`http://localhost:9191/getsingle/${studentId}`)
      .then(res => setSearchedStudent(res.data))
      .catch(err => {
        console.error("Student not found:", err);
        setSearchedStudent(null);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Manager</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '30px' }}>
        <h4>Add Student</h4>
       
        <input {...register('name')} placeholder="Name" required />
        <input {...register('marks')} placeholder="Marks" required />
        <input {...register('username')} placeholder="username" required />
        <input {...register('password')} placeholder="password" required />
        <input {...register('adr.location')} placeholder="Location" required />
        <input {...register('adr.pincode')} placeholder="Pincode" required />
        <input {...register('adr.landmark')} placeholder="Landmark" required />

        <button type="submit">Save Student</button>
      </form>

     
      <div style={{ marginBottom: '30px' }}>
        <h4>Get Student By ID</h4>
        <input
          type="text"
          placeholder="Enter Roll No"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)} />

        <button onClick={fetchStudentById}>Search</button>

        {searchedStudent && (
          <div style={{ marginTop: '10px' }}>
            <h5>Student Found:</h5>
            <p><strong>Name:</strong> {searchedStudent.name}</p>
            <p><strong>Marks:</strong> {searchedStudent.marks}</p>
            <p><strong>Marks:</strong> {searchedStudent.username}</p>
            <p><strong>Marks:</strong> {searchedStudent.password}</p>
            <p><strong>Location:</strong> {searchedStudent.adr.location}</p>
            <p><strong>Pincode:</strong> {searchedStudent.adr.pincode}</p>
            <p><strong>Landmark:</strong> {searchedStudent.adr.landmark}</p>
          </div>
        )}
      </div>

    
      <div>
        <h4>All Students</h4>
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Username</th>
              <th>Password</th>
              <th>Location</th>
              <th>Pincode</th>
              <th>Landmark</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.rollno}>
                <td>{stu.rollno}</td>
                <td>{stu.name}</td>
                <td>{stu.marks}</td>
                <td>{stu.username}</td>
                <td>{stu.password}</td>
                <td>{stu.adr.location}</td>
                <td>{stu.adr.pincode}</td>
                <td>{stu.adr.landmark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
