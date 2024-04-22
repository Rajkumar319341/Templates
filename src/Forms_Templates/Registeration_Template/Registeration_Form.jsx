import React from 'react';
import { useState } from 'react';
import './Simple_Form.css'; 
const Simple_Form = () => {

  const[formData,setFormData]=useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault()

  }

  return (
    <div className='register_root' style={{backgroundColor:"rgb(145, 211, 241)",height:"100vh",padding:"1rem"}}>
    <div className="mdm-form-container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}  >
        <div className="form-group">
          <label htmlFor="createdBy">First Name:</label>
          <input type="text" name="firstname"  onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="createdDate">Last Name:</label>
          <input type="text" name="lastname"  onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="orgEmailId">Address:</label>
          
          <input type="text" name="address"  onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="orgEmpCode">Email Id:</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="orgEmpCode">Password:</label>
          <input type="text" name="password"  onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="orgEmpCode">City:</label>
          <input type="text" name="city" onChange={handleChange} />
        </div>
       
       
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Simple_Form;
