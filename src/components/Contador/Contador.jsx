import './Contador.css';


function Contador() {

    const [cantidad, setCantidad] = useState(1);

    function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    function sumarCantidad() {
        setCantidad(cantidad + 1);
    };

    return (
        <div style= {{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "1 rem 0" }}>
            <button className='btn btn secondary' onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button className='btn btn secondary' onClick={sumarCantidad}>+</button>
        </div>
    );
};

export default Contador;