import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Mon Application React</h1>
      <p>Connectée à Flask et PostgreSQL</p>
    </div>
  );
}

const racine = ReactDOM.createRoot(document.getElementById('root'));
racine.render(<App />);
