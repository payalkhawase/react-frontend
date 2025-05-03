
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function Login() {

    const{register, handleSubmit} =  useForm();
    const navigate = useNavigate();

    function loginSuccess(data)
    {
        console.log(data);
        navigate(`/profile/${data.username}/${data.password}`);
    }

  return (
    <div className="container mt-4">
      <h2 className="text-secondary mb-4">Login</h2>
      <form className="w-50" onSubmit={handleSubmit(loginSuccess)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" className="form-control" {...register('username')} placeholder="Enter username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" {...register('password')} placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary" >Login</button>
      </form>
    </div>
  );
}

export default Login;

    