import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://<BACKEND_EC2_PUBLIC_IP>:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching data'));
  }, []);

  return (
    <div>
      <h1>Fullstack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
