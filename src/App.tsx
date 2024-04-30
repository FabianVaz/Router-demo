import React from 'react';
import {useNavigate } from 'react-router-dom';
import './App.css';


function App() {
  
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <h1>Main page</h1>
        <h2>Navigation...</h2>
        <button onClick={() => navigate('/profile')}>Profile page</button>
      </div>
    </>
  );
}

export default App;