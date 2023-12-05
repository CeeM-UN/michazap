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
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Homepage = () => {



return (
    <Router>
        <div className="arbolpage-container">
            <div className="contenedor-titulo">
                <img src={imagenIzquierda} alt="Imagen Izquierda" className="imagen-lateral izquierda" />
                <h2 className="titulo">Vi|sualizador de chazas con Estructuras de datos</h2>
                <img src={imagenDerecha} alt="Imagen Derecha" className="imagen-lateral derecha" />
            </div>
            <Switch>
                <Route path="/home" component={Homepage} />
                <Route path="/lineales" component={Linealespage} />
                <Route path="/grafos" component={Grafospage} />
                <Route path="/arbol" component={Arbolpage} />
            </Switch>
            <div className="body-container">
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
                <div className="body-image">
                    <img src={logo} alt="Ejemplo de imagen" />
                </div>
            </div>
            <div className="additional-images">
                <h1>Estructuras de datos en el proyecto</h1>
                <Carousel autoPlay interval={4000} infiniteLoop ={true}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={grafo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Grafo" />
                        <p className="subtitle">Un grafo es una forma de representar relaciones entre objetos mediante puntos y líneas. Los puntos se llaman vértices o nodos, y las líneas se llaman aristas o arcos. Los grafos se usan en matemáticas y ciencias de la computación para estudiar problemas de lógica, topología y combinatoria. Por ejemplo, se puede usar un grafo para modelar una red de computadoras, donde los vértices son los dispositivos y las aristas son las conexiones</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={array} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Array" />
                        <p className="subtitle">Un array es una estructura de datos que puede almacenar una colección de elementos del mismo tipo de datos. Un array se utiliza para almacenar una colección de datos, pero a menudo es más útil pensar en un array como una colección de variables del mismo tipo. Por ejemplo, un array de enteros puede almacenar varios números enteros, y un array de cadenas puede almacenar varios textos. Para acceder a un elemento de un array, se utiliza un índice que indica la posición del elemento dentro del array. El índice suele empezar por 0 y terminar por el tamaño del array menos 1. Los arrays se pueden declarar e inicializar de diferentes formas según el lenguaje de programación que se utilice1</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={bst} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="BST" />
                        <p className="subtitle">Un árbol binario es un tipo de grafo que tiene la propiedad de que cada nodo puede tener como máximo dos hijos, llamados hijo izquierdo y hijo derecho. Los árboles binarios se usan para almacenar y procesar datos de forma eficiente, ya que permiten realizar operaciones de búsqueda, inserción y eliminación en un tiempo proporcional al logaritmo del número de nodos. Un ejemplo de árbol binario es el árbol binario de búsqueda, que mantiene los elementos ordenados según una clave.</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={hasp} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Hash" />
                        <p className="subtitle">Las tablas hash son estructuras de datos que permiten asociar claves con valores de forma eficiente. Para ello, utilizan una función hash que transforma las claves en números enteros que representan las posiciones de un arreglo donde se almacenan los valores. Las tablas hash facilitan la búsqueda, inserción y eliminación de elementos, ya que solo requieren conocer la clave para acceder al valor correspondiente. Sin embargo, las tablas hash pueden tener problemas de colisiones, que ocurren cuando dos o más claves se mapean a la misma posición del arreglo. Para resolver las colisiones, se pueden usar diferentes técnicas, como listas enlazadas, direccionamiento abierto o doble hashing</p>
                    </div>
                </Carousel>
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
        </div>
    </Router>
    );
};

export default Homepage;