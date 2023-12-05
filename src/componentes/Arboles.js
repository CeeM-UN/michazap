import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import BinaryTree from '../componentes/BinaryTree';




function Arboles() {
    // State variables
    const [data, setData] = useState([]);
    const [size, setSize] = useState(15);
    const [searchId, setSearchId] = useState("");
    const [searchPath, setSearchPath] = useState([]);
    const [binaryTree, setBinaryTree] = useState(new BinaryTree());
    const [treeContainerWidth, setTreeContainerWidth] = useState(400);
    const adjectives = ["Elegante", "Alegre", "Del Tesoro", "Brillante", "De la Belleza", "Encantador", "Del Capricho", "Asombroso", "Del Tío", "Mágico", "Fantástico", "Maravilloso", "Increíble", "Sorprendente", "Divertido", "Fascinante", "Extraordinario", "Impresionante", "Espectacular", "Estupendo"];
    const nouns = ["Esquina", "Armario", "Tienda", "Bazar", "Boutique", "Emporio", "Casa", "Almacén", "Tiendita", "Mercado", "Rincón", "Establecimiento", "Negocio", "Puesto", "Local", "Tiendecita", "Comercio", "Mercadillo", "Boutiquín", "Emporito"];
    const [searchTime, setSearchTime] = useState(0);
    const [foundItemId, setFoundItemId] = useState(null);

    // Function to generate unique IDs
    const generateUniqueIds = () => {
        const uniqueIds = new Set();
        const generatedIds = [];

        while (uniqueIds.size < size) {
            const randomId = Math.floor(Math.random() * size) + 1;
            if (!uniqueIds.has(randomId)) {
                uniqueIds.add(randomId);
                generatedIds.push(randomId);
            }
        }

        return generatedIds;
    };

    // Function to generate a random item with a unique ID
    const generateRandomItem = (existingIds) => {
        const generatedIds = new Set(existingIds);

        let randomId;
        let attempts = 0;
        const maxAttempts = 100;

        do {
            randomId = Math.floor(Math.random() * (size * 2)) + 1;
            attempts++;

            if (attempts > maxAttempts) {
                console.error("Se alcanzó el límite de intentos al generar un ID único.");
                return null;
            }
        } while (generatedIds.has(randomId));

        generatedIds.add(randomId);

        const randomName = "La " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)];

        return {
            id: randomId,
            name: randomName,
        };
    };

    // Function to format a tree node for visualization
    const formatTree = (node, isSearchPathNode = false) => {
        if (!node) return null;

        const formattedNode = {
            name: node.data.name,
        };

        if (node.left || node.right) {
            formattedNode.children = [];
            if (node.left) {
                formattedNode.children.push(formatTree(node.left, isSearchPathNode));
            }
            if (node.right) {
                formattedNode.children.push(formatTree(node.right, isSearchPathNode));
            }
        }

        return formattedNode;
    };

    // Effect to update tree container width on window resize
    useEffect(() => {
        const updateDimensions = () => {
            setTreeContainerWidth(window.innerWidth / 2);
        };

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    // Function to generate an array with unique IDs and populate the table
    const generateArrayWithIdsAndTable = () => {
        const start = performance.now();

        const uniqueIds = generateUniqueIds();

        const idNameHashMap = {};
        for (let i = 0; i < size; i++) {
            const id = uniqueIds[i];
            const name = "La " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)];
            idNameHashMap[id] = name;
        }

        const newArray = uniqueIds.map(id => ({
            id: id,
            name: idNameHashMap[id],
        }));

        setData(newArray);

        const newBinaryTree = new BinaryTree();
        newArray.forEach(item => {
            newBinaryTree.insertData(item);
        });
        setBinaryTree(newBinaryTree);

        const end = performance.now();
        setSearchPath([]);
        setSearchTime(end - start);
    };

    // Function to search for an item in the tree
    const searchItem = () => {
        const idToSearch = parseInt(searchId, 10);

        if (!isNaN(idToSearch)) {
            const { foundNode, path } = binaryTree.searchWithPath(idToSearch);
            setSearchPath(path);
            setFoundItemId(foundNode ? idToSearch : null);

            const formattedTreeData = formatTree(binaryTree.root, true); // true para resaltar el nodo de búsqueda
            setSearchTime(0); // Puedes ajustar esto según sea necesario

            if (foundNode) {
                // Modificar el color del nodo encontrado
                formattedTreeData.nodeSvgShape = {
                    shape: 'circle',
                    shapeProps: {
                        r: 10,
                        fill: 'green', // Cambia el color como desees
                    },
                };
                alert(`Elemento encontrado: ${foundNode.data.name}`);
            } else {
                alert(`Elemento con ID ${idToSearch} no encontrado.`);
            }

            // Actualizar el objeto treeData con el nodo modificado
            const updatedTreeData = {
                name: 'Root',
                children: formattedTreeData.children,
            };

            setData([...data]); // Asegúrate de tener una copia actualizada de data para que React detecte el cambio
        } else {
            alert("Ingresa un ID válido para buscar.");
        }
    };

    // Function to delete an element from the tree
    const eliminarElemento = () => {
        const idToDelete = parseInt(searchId, 10);

        if (!isNaN(idToDelete)) {
            const newBinaryTree = new BinaryTree();
            newBinaryTree.root = binaryTree.root; // Copia el árbol existente
            newBinaryTree.deleteNode(idToDelete);

            setData(prevData => prevData.filter(item => item.id !== idToDelete));
            setBinaryTree(newBinaryTree);
        } else {
            alert("Ingresa un ID válido para eliminar.");
        }
    };

    // Function to delete the entire tree
    const eliminarArbol = () => {
        const newBinaryTree = new BinaryTree();
        setData([]);
        setBinaryTree(newBinaryTree);
    };

    // Function to add a random element to the tree
    const addItemToList = () => {
        const existingIds = data.map(item => item.id);
        const newItem = generateRandomItem(existingIds);

        if (newItem) {
            const newBinaryTree = new BinaryTree();
            newBinaryTree.root = binaryTree.root; // Copy the existing tree
            newBinaryTree.insertData(newItem);

            setData(prevData => [...prevData, newItem]);
            setBinaryTree(newBinaryTree);
        }
    };

    // Function to define path rendering for the tree
    const straightPathFunc = (linkDatum, orientation) => {
        const { source, target } = linkDatum;
        return `M${source.x},${source.y}L${target.x},${target.y}`;
    };

    // Tree data for visualization
    const treeData = {
        name: 'Root',
        children: binaryTree.root ? [formatTree(binaryTree.root)] : [],
    };

    return (
        <div className="menu-lateral">
            <button onClick={generateArrayWithIdsAndTable}>Generar Árbol</button>
            <button onClick={searchItem}>Buscar Elemento</button>
            <button onClick={eliminarElemento}>Eliminar Elemento</button>
            <button onClick={addItemToList}>Agregar Elemento</button>
            <button onClick={eliminarArbol}>Eliminar Árbol</button>


            {/* Menú desplegable */}
            <div className="dropdown-container">
                <select value={size} onChange={e => setSize(e.target.value)}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>

            {/* Menú desplegable para la búsqueda */}
            <div className="dropdown-containertwo">
                <select value={searchId} onChange={e => setSearchId(e.target.value)}>
                    <option value="" disabled hidden>Selecciona o Ingresa ID</option>
                    {data.map(item => (
                        <option key={item.id} value={item.id}>{item.id}</option>
                    ))}
                </select>
            </div>

            <table className="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id} style={{ backgroundColor: foundItemId === item.id ? 'blue' : null }}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="tree-container custom-tree-container">
                <Tree
                    data={treeData}
                    rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf"
                    orientation="vertical"
                    translate={{ x: treeContainerWidth / 2, y: 50 }}
                    zoom={1}
                    separation={{ siblings: 2.5, nonSiblings: 3 }}
                    pathFunc={straightPathFunc}


                />
            </div>
        </div>
    );
}

export default Arboles;
