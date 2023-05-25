import React from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine';

function App() {
  return (
    <div className="App">
      <h1 className="title">Mi Proyecto de Batería Electrónica</h1>
      <DrumMachine />
      <footer>
        <p className="signature">Desarrollado por Mario Berni</p>
      </footer>
    </div>
  );
}

export default App;
