import React from 'react';
import './Contador.css';

function Contador({ cantidad, setCantidad, stock = 10 }) {
    const restarCantidad = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const sumarCantidad = () => {
        if (cantidad < stock) setCantidad(cantidad + 1);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: "1rem" }}>
            <button className='btn btn-secondary' onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button className='btn btn-secondary' onClick={sumarCantidad}>+</button>
        </div>
    );
}

export default Contador;