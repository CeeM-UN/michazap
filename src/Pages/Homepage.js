import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbarly from '../componentes/navegacion/Navbar';
import Grafos from '../componentes/Grafos';
import Arbolpage from './Arbolpage';
import ArrayComponent from '../componentes/Lineales';
import arrayImage from '../Images/array.jpg';
import Linealespage from './Linealespage';
import imagenIzquierda from '../Images/un.png';
import imagenDerecha from '../Images/bst.jpg';


import '../Styles/Home.css';
import '../Styles/Navbarly.css';
import Grafospage from './Grafospage';

const Homepage = () => {
  return (
    <Router>
      <div className="arbolpage-container">
            
                <div className="contenedor-titulo">
                    <img src={imagenIzquierda} alt="Imagen Izquierda" className="imagen-lateral izquierda" />
                    <h2 className="titulo">Data Structures</h2>
                    <img src={imagenDerecha} alt="Imagen Derecha" className="imagen-lateral derecha" />
                </div>
        
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route path="/lineales" component={Linealespage} />
          <Route path="/grafos" component={Grafospage} />
          <Route path="/arbol" component={Arbolpage} />
          {/* Asegúrate de agregar todas las rutas necesarias */}
        </Switch>
      </div>
    </Router>
  );
};

export default Homepage;
