import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sensor from './pages/sensor/sensor';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Sensor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
