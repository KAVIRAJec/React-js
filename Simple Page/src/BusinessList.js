import React, { useState } from 'react';
import './about.css';

function About(props) {
  const { businessList } = props;
  const [newBusiness, setNewBusiness] = useState('');

  const addBusiness = () => {
    if (newBusiness.trim() !== '') {
      const updatedBusinessList = [...businessList, newBusiness];
      props.updateBusinessList(updatedBusinessList);
      setNewBusiness('');
    }
  };

  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>We are a company that specializes in various businesses:</p>
      <ul>
        {businessList.map((business, index) => (  
          <li key={index}>{business}</li>
        ))}
      </ul>
      <div className="add-business">
        <h3>Add a New Business:</h3>
        <input

          type="text"
          placeholder="Enter a business name"
          value={newBusiness}
          onChange={(e) => setNewBusiness(e.target.value)}
        />
        <button onClick={addBusiness}>Add</button>
      </div>
    </div>
  );
}

export default About;
