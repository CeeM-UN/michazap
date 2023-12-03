import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="nav-link" href="./Homepage">Michazapp</a>
                    <li className="nav-item">
                        <a className="nav-link" href="/Lineales">Lineales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Grafos">Grafos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/Arboles">Arboles</a>
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
