import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Table from './Table';
import Button from './Button';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend and update state
    // Once data is fetched, setLoading(false)
  }, []);

  const handleRowClick = (id) => {
    const confirmDelete = window.confirm('Confirm delete?');
    if (confirmDelete) {
      // Send fetch to delete data based on id
      // After successful delete, fetch updated data and update state
    }
  };

  return (
    <div>
      <Navigation />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={['ID', 'Number of People', 'Price']}
          data={data}
          onRowClick={handleRowClick}
        />
      )}
    </div>
  );
}

export default Home;