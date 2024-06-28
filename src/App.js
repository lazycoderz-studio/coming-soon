// src/App.js
import React, { useState, useEffect } from 'react';
import Rocket from './Rocket';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>We will be live soon</h1>
        <p>Visit us at lazycoderz.com</p>
        <p>Check our YouTube channel: <a href="https://www.youtube.com/channel/UC_LazyCoderz" target="_blank" rel="noopener noreferrer">Lazy Coderz</a></p>
      </header>
    </div>
  );
}

export default App;
