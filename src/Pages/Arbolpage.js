import React from 'react'
import { Router } from 'react-router-dom'
import '../Styles/Linealespage.css';
import ArrayComponent from '../componentes/Lineales';
import ArrayImage from '../Images/array.jpg';


const Arbolpage = () => {
	return (
        <Router>
            <div className="contenedor-titulo"/>
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
    )
}

export default Arbolpage   