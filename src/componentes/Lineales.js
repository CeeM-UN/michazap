import React, { useState } from 'react';

function ArrayComponent() {
    const [numbers, setNumbers] = useState([]);
    const [input, setInput] = useState("");
    const [size, setSize] = useState(100);
    const [searchTime, setSearchTime] = useState(0);
    const adjectives = ["Elegante", "Alegre", "Del Tesoro", "Brillante", "De la Belleza", "Encantador", "Del Capricho", "Asombroso", "Del Tío", "Mágico", "Fantástico", "Maravilloso", "Increíble", "Sorprendente", "Divertido", "Fascinante", "Extraordinario", "Impresionante", "Espectacular", "Estupendo"];
    const nouns = ["Esquina", "Armario", "Tienda", "Bazar", "Boutique", "Emporio", "Casa", "Almacén", "Tiendita", "Mercado", "Rincón", "Establecimiento", "Negocio", "Puesto", "Local", "Tiendecita", "Comercio", "Mercadillo", "Boutiquín", "Emporito"];
    
    const generateArray = () => {
        const start = performance.now();
        setNumbers(Array.from({length: size}, (_, i) => "La " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + " " + (i + 1)));
        const end = performance.now();
        setSearchTime(end - start);
    };

    

    const searchNumber = () => {
        const start = performance.now();
        const index = parseInt(input);
        if (index >= 0 && index < numbers.length) {
            alert("El número en el índice " + (index) + " es " + numbers[index] + ".");
        } else {
            alert("Índice fuera de rango.");
        }
        const end = performance.now();
        setSearchTime(end - start);
    };

    const addNumber = () => {
        setNumbers(prevNumbers => [...prevNumbers, "La " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)]]);
    };
    
    const removeNumber = () => {
        const index = parseInt(input);
        if (index >= 0 && index < numbers.length) {
            setNumbers(prevNumbers => prevNumbers.filter((_, i) => i !== index));
        } else {
            alert("Índice fuera de rango.");
        }
    };

    const handleInputChange = (e) => {
        const value = Math.max(0, Math.min(e.target.value, numbers.length));
        setInput(value);
    };

    return (
        <div>
            <select value={size} onChange={e => setSize(e.target.value)}>
                <option value="1000">1000</option>
                <option value="10000">10000</option>
                <option value="100000">100000</option>
                <option value="1000000">1000000</option>
            </select>
            <button onClick={generateArray}>Generar array de chazas</button>
            <input type="number" value={input} onChange={handleInputChange} min="0" max={numbers.length+1} />
            <button onClick={searchNumber}>Buscar chaza</button>
            <button onClick={removeNumber}>Eliminar chaza por indice</button>
            <button onClick={addNumber}>Agregar</button>
            <p>Tiempo de búsqueda: {searchTime} milisegundos</p>
            <p>Cantidad de elementos en el array: {numbers.length}</p>

        </div>
    );
}

export default ArrayComponent;