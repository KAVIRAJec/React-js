// Home.js
import './App.css';
import React, { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
  });

  const handleChange=(e)=>{
    const { name,value}=e.target;
    setFormData({...formData,[name]:value});
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormData({
      name:'',
      email:'',
    });
  };

  return (
    <div>
            <div className='head'>Welcome to My React Application</div>
    <div className='content'>Have a question or need assistance? Feel free to Contact Us. Our friendly team is ready to assist you.
Thank you for choosing My website for all your tech needs. We look forward to serving you!</div>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name:</label>
        <input 
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required></input>
      </div>
      <div className='form-group'>
        <label htmlFor='name'>Email:</label>
        <input 
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required></input>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div className='display-content'>
      <h2>Entered Content:</h2>
      <p>Name:{formData.name}</p>
      <p>Email:{formData.email}</p>
    </div>
    </div>
  );
}

export default Home;
