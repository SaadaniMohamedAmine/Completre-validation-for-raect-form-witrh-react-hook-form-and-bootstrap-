import React, { useContext,useState } from "react";
import AuthContext from "../hooks/authContext";
import { useNavigate } from "react-router-dom";
import HomeReturn from "./HomeReturn";

const Login = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  //get the information from the user 
  const [user,setUser]=useState({
    email:"",
    password:"",
  })
  const handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  }
  const login = (e) => {
    e.preventDefault();
    localStorage.setItem("email",user.email) ;
    localStorage.setItem("password",user.password) ;
    console.log(user);
    authContext.loggedIn();
    navigate("/profile");
  };
  return (
    <div className="container py-5 my-5">
      <h1 className="py-5 text-center">I am the login page </h1>
      <form
        className=" w-md-75 w-sm-100 mx-auto border p-3"
        onSubmit={login}
      >
        <p className="text-center">
          Please,fill in the form inputs to login !!!
        </p>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" name="password" onChange={handleChange} required />
        </div>
        <div className="my-3 text-end">
          <button className="btn btn-secondary">Submit</button>
        </div>
      </form>
      <HomeReturn />
    </div>
  );
};

export default Login;
