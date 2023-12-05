import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Arbolpage from './Arbolpage';
import Linealespage from './Linealespage';
import '../Styles/Home.css';
import '../Styles/Navbarly.css';
import Grafospage from './Grafospage';
import imagenIzquierda from '../Images/un.png';
import imagenDerecha from '../Images/logo192.jpeg';
import logo from '../Images/logo192.jpeg';
import grafo from '../Images/Grafos.jpg';
import array from '../Images/array.jpg';
import bst from '../Images/bst.jpg'
import hasp from '../Images/hasp.png'


const Homepage = () => {



    return (
        <Router>
            <div className="arbolpage-container">
                <div className="contenedor-titulo">
                    <img src={imagenIzquierda} alt="Imagen Izquierda" className="imagen-lateral izquierda" />
                    <h2 className="titulo">Visualizador de chazas con Estructuras de datos</h2>
                    <img src={imagenDerecha} alt="Imagen Derecha" className="imagen-lateral derecha" />
                </div>

                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route path="/lineales" component={Linealespage} />
                    <Route path="/grafos" component={Grafospage} />
                    <Route path="/arbol" component={Arbolpage} />
                    {/* Asegúrate de agregar todas las rutas necesarias */}
                </Switch>

                <div className="body-container">
                    {/* Columna izquierda con texto justificado */}
                    <div className="body-text">
                        <p>
                            ¡Bienvenido al visualizador de chazas con estructuras de datos!
                            En esta página web, podrás explorar visualmente diversas estructuras de datos
                            que incluyen grafos, árboles binarios, listas y también hashs.
                            Todo esto toma como referencia el fascinante mundo de las chazas en la Universidad Nacional de Colombia.
                            Explora y descubre cómo estas estructuras se entrelazan con las coloridas historias y tradiciones
                            que rodean las chazas universitarias. ¡Prepárate para una experiencia única en la web!
                        </p>
                    </div>

                    {/* Columna derecha con imagen */}
                    <div className="body-image">
                        <img src={logo} alt="Ejemplo de imagen" />
                    </div>
                </div>

                

                <div className="additional-images">
                    <h1>Estructuras de datos en el proyecto</h1>
                    <img src={array} alt="Imagen 2" style={{ maxWidth: '320px', marginRight: '10px' }} />
                    <img src={grafo} alt="Imagen 1" style={{ maxWidth: '250px', marginRight: '10px' }} />
                    <img src={hasp} alt="Imagen 3" style={{ maxWidth: '200px', marginRight: '10px' }} />
                    <img src={bst} alt="Imagen 3" style={{ maxWidth: '320px', marginRight: '10px' }} />




                    {/* Agrega más imágenes según sea necesario */}
                </div>



                <footer className="footer-container">
                    <div className="footer-content">
                        <div className="footer-text">
                            <p>© 2023 Michazapp Cesar Epia, Sebastian Olarte</p>
                            <p>Desarrollado con React</p>
                        </div>

                        <div className="footer-images">
                            <img src={imagenDerecha} alt="Logo Michazap" />
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default Homepage;