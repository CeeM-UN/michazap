import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../Styles/Grafos.css';
import Grafos from '../componentes/Grafos';
import imagenIzquierda from '../Images/un.png';
import imagenDerecha from '../Images/grafo.jpg';

const Grafospage = () => {
	return (
	<div>
		<Router>
		<div className="contenedor-titulo">
					<h2 className="titulo">Creacion de grafos para la muestra de chazas</h2>
					<img src={imagenDerecha} alt="Imagen Derecha" className="imagen-lateral derecha" />
					<img src={imagenIzquierda} alt="ImgIzq" className="imagen-lateral izquierda" />
		    </div>
                <div className="contenedor-menu">
					<Grafos/>
                </div>
		</Router>
		
	</div>
	
	)
}

export default Grafospage
