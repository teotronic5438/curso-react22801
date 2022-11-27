import React from 'react';
import Router from './Components/Routes/Router';
import './App.css'
import Button from 'react-bootstrap/Button';
import Interruptor from './Components/Interruptor/Interruptor';


function App() {
  return (
    <div className='container'>
      {/* <a href='http://localhost:3000/home'>Voy al Home</a> */}
      {/* <a href='/home'>Voy al Home</a> */}
      <Router />
      <Interruptor></Interruptor>
      <div className="d-grid gap-2">  {/* el gap-2 es si hay mas de un boton */}
        <Button variant="warning" size="lg" onClick={()=>alert("Se apreto un boton")}>Alerta</Button>
      </div>
    </div>
  );
}

export default App;
