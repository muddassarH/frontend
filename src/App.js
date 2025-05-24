import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_URL
  const API_URL = `${BASE_URL}/api/hello/`;
  // const API_URL = 'http://localhost:8000/api/hello';
  // ^ If REACT_APP_API_URL is not set, default to a local Django server for dev.

  useEffect(() => {
    // Fetch the message from the Django API
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.error('Error fetching data:', error);
        setData({ error: 'Failed to fetch data' });
      });
  }, [API_URL]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Django + React Demo</h1>
      {data ? (
        data.message ? <p>Message: <strong>{data.message}</strong></p>
                     : <p>Error: {data.error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
