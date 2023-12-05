import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArrayComponent from '../componentes/Lineales';
import ArrayImage from '../Images/array.jpg';
import '../Styles/Linealespage.css';
import imagenIzquierda from '../Images/un.png';

const Linealespage = () => {
  return (
    <div>
      <Router>
        <div className="contenedor-titulo">
          <h2 className="titulo">Utilizacion de array para busqueda de chazas</h2>
          <img src={ArrayImage} alt="Imagen Derecha" className="imagen-lateral derecha" />
          <img src={imagenIzquierda} alt="ImgIzq" className="imagen-lateral izquierda" />
        </div>
        <div className="contenedor-menu">
          <div className="contenedor-izquierdo">
            <h2>Busqueda de chaza con array</h2>
            <div style={{ height: '20px' }}></div>
            <ArrayComponent />
          </div>
          <div className="contenedor-derecho">
            <img src={ArrayImage} alt="Array" />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Linealespage;