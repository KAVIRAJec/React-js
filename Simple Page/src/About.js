import React, { useState } from 'react';
import About from './BusinessList'; // Import the About component

function App() {
  // Define the business list state and function to update it
  const [businessList, setBusinessList] = useState([]);

  // Function to update the business list
  const updateBusinessList = (updatedList) => {
    setBusinessList(updatedList);
  };

  return (
    <div>
      <About businessList={businessList} updateBusinessList={updateBusinessList} />
    </div>
  );
}

export default App;
