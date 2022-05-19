import React from 'react';

/* CSS */
import './App.css';
import './CSS/common.css';

/* JS */
import TimerFunction from './components/Timer.js';
import DarkModeFunction from './components/DarkMode';

function App() {
  return (
    <div>
      <TimerFunction />
      <DarkModeFunction />
    </div>
  )
}

export default App;
