import React, { useState, useEffect } from 'react';

const Medications = () => {
  const [medications, setMedications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL = 'https://glittery-dull-snickerdoodle.glitch.me/v1'; 
    
    fetch(`${API_BASE_URL}/meds/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch medications');
        }
        return response.json();
      })
      .then(data => {
        setMedications(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching medications:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading medications...</div>;
  }

  return (
    <div>
      <h1>Medication List</h1>
      <ul>
        {medications.map(medication => (
          <li key={medication.id}>
            <strong>Name:</strong> {medication.name}<br />
            <strong>Description:</strong> {medication.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medications;