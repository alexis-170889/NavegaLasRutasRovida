import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import getProductos from '../../services/mockService';
import Contador from '../Contador/Contador';
import { useAppContext } from '../Context/context';


function ItemDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const { agregarAlCarrito } = useAppContext();

    useEffect(() => {
        setLoading(true);
        getProductos()
            .then(result => {
                const product = result.find(el => el.id === id);
                setProducto(product);
                setLoading(false);
            })
            .catch((err) => {
                alert(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Loader />;
    if (!producto) return <p>Producto no encontrado</p>;

    return (
        <div className="card">
            <div className="card-content">
                <img src={producto.img} className="card-image" alt={producto.name} />
                <div className="card-content">
                    <h3 className="card-title">{producto.name}</h3>
                    <p className="card-description">{producto.description}</p>
                    <p className="card-price">${producto.price}</p>
                </div>
                <Contador 
                    cantidad={cantidad} 
                    setCantidad={setCantidad} 
                    stock={producto.stock} 
                />
                <button 
                    className="card-button"
                    onClick={() => agregarAlCarrito(producto, cantidad)}
                >
                    Agregar al carrito
                </button>
                <Link to="/productos" className="card-button">Volver</Link>
            </div>
        </div>
    );
}

export default ItemDetail;