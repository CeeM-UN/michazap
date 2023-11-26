import React from 'react';
import './App.css';
import ArrayComponent from './componentes/Lineales';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbarly from './componentes/navegacion/Navbar';
import Homepage from './Pages/Homepage';
import Grafos from './Pages/Grafospage';
import Arbolpage from './Pages/Arbolpage';
import './App.css';
import "./Styles/Navbarly.css"
import Linealespage from './Pages/Linealespage';

function App() {
  return (
    <Router>
        <Navbarly/>
      <div className= "contenedor-principal">
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route path="/lineales" component={Linealespage} />
          <Route path="/grafos" component={Grafos} />
          <Route path="/arbol" component={Arbolpage} />
          {/* Asegúrate de agregar todas las rutas necesarias */}
          
        </Switch>
          <div className="contenedor-body">
            <h3></h3>

          </div>
        </div>
    </Router>
  );
}

export default App;