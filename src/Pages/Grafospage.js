import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArrayComponent from '../componentes/Lineales';
import ArrayImage from '../Images/array.jpg';
import '../Styles/Linealespage.css';
import imagenIzquierda from '../Images/un.png';
import imagenDerecha from '../Images/bst.jpg';


const Grafospage = () => {
    return (
        <div>
            <Router>
                <div className="contenedor-titulo">
                    <img src={imagenIzquierda} alt="Imagen Izquierda" className="imagen-lateral izquierda" />
                    <h2 className="titulo">Grafos</h2>
                    <img src={imagenDerecha} alt="Imagen Derecha" className="imagen-lateral derecha" />
                </div>
            </Router>

        </div>

    )
}

export default Grafospage
