import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import Header from './templates/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './templates/Home'
import Login from './templates/Login'
import StudentList from './templates/StudentList'
import StudentProfile from './templates/StudentProfile'



function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <div className="container-fluid p-0">
        {/* Header Section */}
        <div className="row">
          <div className="col-12 bg-primary text-white py-3 px-4 shadow">
            <Header />
          </div>
        </div>
      </div>

      <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile/:username/:password" element={<StudentProfile />} />
              <Route path="/studentlist" element={<StudentList />} />
              
      </Routes>
      </BrowserRouter>
    
    
  )
}

export default App
