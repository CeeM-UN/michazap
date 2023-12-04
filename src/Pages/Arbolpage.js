import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/Arbolpage.css'; // Asegúrate de importar tu archivo CSS
import Arboles from '../componentes/Arboles';
import imagenIzquierda from '../Images/un.png';
import imagenDerecha from '../Images/bst.jpg';

const Arbolpage = () => {
    return (
    <div className="arbolpage-container">
        <Router>
            <div className="contenedor-titulo">
                <img src={imagenIzquierda} alt="Imagen Izquierda" className="imagen-lateral izquierda" />
                <h2 className="titulo">Binary Search Tree and Hasp</h2>
                <img src={imagenDerecha} alt="Imagen Derecha" className="imagen-lateral derecha" />
            </div>
            <div className="main-title">
                <h2>Main BST and Hasp</h2>
                <Arboles/>
            </div>

        </Router>
    </div>
    );
}

export default Arbolpage;
