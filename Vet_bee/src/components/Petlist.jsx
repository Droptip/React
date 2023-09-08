import React, { useState, useEffect } from 'react';

const Petlist = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch('/v1/pets/')
      .then(response => response.json())
      .then(data => {
        setPets(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching pets:', error);
        setIsLoading(false);
      });
  }, []); 

  
  const archivePet = (petId) => {
   
    fetch(`/v1/pets/${petId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 50) {
          
          setPets(pets.filter(pet => pet.id !== petId));
        } else {
          console.error('Failed to archive pet. Status code:', response.status);
        }
      })
      .catch(error => {
        console.error('Error archiving pet:', error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pet List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Client Email</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.dob}</td>
              <td>{pet.client_email}</td>
              <td>
                <button onClick={() => archivePet(pet.id)}>Archive</button>
                <button onClick={() => viewHealthLog(pet.id)}>View Log</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Petlist;