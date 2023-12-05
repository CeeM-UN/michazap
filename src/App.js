import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Styles/Linealespage.css';
import Homepage from './Pages/Homepage';
import Linealespage from './Pages/Linealespage';
import Arbolpage from './Pages/Arbolpage';
import Navbarly from './componentes/navegacion/Navbar';
import Grafospage from './Pages/Grafospage';


function App() {
  return (
    <Router>
        <Navbarly/>
      <div className= "contenedor-principal">
        <Switch>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/lineales" component={Linealespage} />
          <Route path="/grafos" component={Grafospage} />
          <Route path="/arboles" component={Arbolpage} />
          {/* Asegúrate de agregar todas las rutas necesarias */}
          
        </Switch>
          <div className="contenedor-body">

          </div>
        </div>
    </Router>
  );
}

export default App;