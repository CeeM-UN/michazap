import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbarly from '../componentes/navegacion/Navbar';
import Grafospage from './Grafospage';
import Arbolpage from './Arbolpage';
import ArrayComponent from '../componentes/Lineales';
import arrayImage from '../Images/array.jpg';
import Linealespage from './Linealespage';

import '../Styles/Home.css';
import '../Styles/Navbarly.css';

const Homepage = () => {
    return (
        <Router>
            <Navbarly />
            <div className="contenedor-principal">
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
}

export default Homepage;