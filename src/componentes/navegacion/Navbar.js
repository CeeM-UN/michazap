import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Michazapp</a>
                    <li className="nav-item">
                        <a className="nav-link" href="/Lineales">Lineales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Grafos">Grafos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/Arbolpage">Arboles</a>
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
