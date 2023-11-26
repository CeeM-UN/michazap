import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArrayComponent from '../componentes/Lineales';
import ArrayImage from '../Images/array.jpg';
import '../Styles/Linealespage.css';


const Linealespage = () => {
  return (
    <div>
        <Router>
        <div className="contenedor-titulo">                </div>
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
  )
}

export default Linealespage;