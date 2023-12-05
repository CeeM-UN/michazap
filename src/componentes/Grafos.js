import React, { useState, useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import '../Styles/Grafos.css';

const storeNames = Array.from({ length: 20 }, (_, i) => `Tienda ${i + 1}`);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Grafos = () => {
    const [nodes, setNodes] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const initialNodes = storeNames.map((name, i) => ({
            id: name,
            size: getRandomInt(200, 1000),
        }));

        const initialLinks = [];
        for (let i = 0; i < initialNodes.length; i++) {
            const numLinks = getRandomInt(1, 4);
            for (let j = 0; j < numLinks; j++) {
                const targetIndex = getRandomInt(0, initialNodes.length - 1);
                if (targetIndex !== i) {
                    initialLinks.push({
                        source: initialNodes[i].id,
                        target: initialNodes[targetIndex].id,
                    });
                }
            }
        }

        setNodes(initialNodes);
        setLinks(initialLinks);
    }, []);

    const handleAddNode = () => {
        let newNode;
        if (nodes.length === 0) {
            newNode = {
                id: 'Tienda 1',
                size: getRandomInt(200, 1000),
            };
        } else {
            newNode = {
                id: `Tienda ${nodes.length + 1}`,
                size: getRandomInt(200, 1000),
            };
            const newLinks = [
                {
                    source: newNode.id,
                    target: nodes[nodes.length - 1].id, // enlace al nodo anterior
                },
                {
                    source: newNode.id,
                    target: nodes[getRandomInt(0, nodes.length - 1)].id, // enlace a un nodo aleatorio
                },                {
                    source: newNode.id,
                    target: nodes[getRandomInt(0, nodes.length - 1)].id, // enlace a un nodo aleatorio
                },
            ];
            setLinks([...links, ...newLinks]);
        }
        setNodes([...nodes, newNode]);
    };

    const handleRemoveNode = () => {
        if (nodes.length > 0) {
            const nodeIdToRemove = nodes[nodes.length - 1].id;
            setNodes(nodes.slice(0, -1));
            setLinks(links.filter(link => link.source !== nodeIdToRemove && link.target !== nodeIdToRemove));
        }
    };
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
            gravity: getRandomInt(-150, 0), // aumenta la gravedad para hacer que los nodos se repelan más
            linkLength: 10, // aumenta la longitud del enlace para permitir más espacio entre los nodos
            linkStrength: getRandomInt(2, 3),
            disableLinkForce: false
        },
        node: {
            size: 120,
            highlightStrokeColor: 'blue',
        },
        link: {
            highlightColor: 'lightblue',
        },
    };

    return (
        <div>
            <Graph
                id="graph-id"
                data={{ nodes, links }}
                config={config}
                onClickNode={handleClick}
            />
            <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>

                <button onClick={handleAddNode}>Agregar nodo</button>
                <button onClick={handleRemoveNode}>Eliminar nodo</button>
            </div>
        </div>
    );
    }
export default Grafos;