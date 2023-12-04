import React from 'react';
import { Graph } from 'react-d3-graph';
import Imgnodo from '../Images/Imgnodo.png';

const storeNames = ['Tienda 1', 'Tienda 2', 'Tienda 3', 'Tienda 4', 'Tienda 5', 'Tienda 6', 'Tienda 7', 'Tienda 8', 'Tienda 9', 'Tienda 10', 'Tienda 11', 'Tienda 12', 'Tienda 13', 'Tienda 14', 'Tienda 15', 'Tienda 16', 'Tienda 17', 'Tienda 18', 'Tienda 19', 'Tienda 20'];

// Función para generar un número aleatorio entre min y max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar los nodos con un peso aleatorio
const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: storeNames[i],
    size: getRandomInt(200, 1000), // tamaño aleatorio entre 200 y 1000
}));
// Generar los enlaces de manera aleatoria
const links = [];
for (let i = 0; i < nodes.length; i++) {
    const source = nodes[i].id;
    const target = nodes[getRandomInt(0, nodes.length - 1)].id;
    links.push({ source, target });
}

const data = { nodes, links };

const Grafos = () => {
    const handleClick = (nodeId) => {
        alert(`Haz clickeado el nodo ${nodeId}`);
    };

    const config = {
        nodeHighlightBehavior: true,
        height: 400,
        width: 800,
        staticGraph: false,
        automaticRearrangeAfterDropNode: true,
        d3: {
            gravity: -100, // reducir la fuerza de gravedad
            linkLength: 50, // reducir la longitud de los enlaces
            linkStrength: getRandomInt(1,3), // fuerza de los enlaces
            disableLinkForce: false // habilitar la fuerza de los enlaces
        },
        node: {

            size: 120,
            highlightStrokeColor: 'blue',
            },
        };
    return (
        <div>
            <Graph
                id="graph-id"
                data={data}
                config={config}
                onClickNode={handleClick}
            />
        </div>
    );
};

export default Grafos;