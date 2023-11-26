import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArrayComponent from '../componentes/Lineales';
import ArrayImage from '../Images/array.jpg';
import '../Styles/Linealespage.css';
import Grafos from '../componentes/Grafos';

const Grafospage = () => {
	return (
	<div>
		<Router>
		<div className="contenedor-titulo">
		    </div>
                <div className="contenedor-menu">
                    <div className="contenedor-izquierdo">
						<h2>Manejo de datos de chaza con grafo</h2>
						<div style={{ height: '2%' }}></div>
							
                    </div>
                    <div className="contenedor-derecho">
						<Grafos/>
                    </div>
                </div>
		</Router>
		
	</div>
	
	)
}

export default Grafospage
