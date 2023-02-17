import { useState } from 'react'
import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Calculator Collab!</h1>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
