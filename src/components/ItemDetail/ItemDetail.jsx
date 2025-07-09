import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import getProductos from '../../services/mockService';
import Contador from '../Contador/Contador';



function ItemDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        setLoading(true);
        getProductos()
            .then(result => {
                const product = result.find(el => el.id === id);
                if (product) {
                    setProducto(product);
                }
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
                    <p className="card-price">Precio: ${producto.price}</p>
                </div>
                <button className="card-button">Agregar al carrito</button>
                <Contador />
                <Link to="/productos" className="card-button">Volver</Link>
            </div>
        </div>
    );
}

export default ItemDetail;