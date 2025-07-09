import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, price, name, description, img }) {

    return (
        <div className="card">
            <div className="card-content">
                <img src={img} className="card-image" alt={name} />
                <div className="card-content">
                    <h3 className="card-title" >{name}</h3>
                    <p className="card-price">Precio: ${price}</p>
                </div>
                <Link to={`/detalle/${ id }`}>
                    <button className="card-button">Ver Detalle</button>
                </Link>
                <button className="card-button">Agregar al carrito</button>
            </div>
        </div>
    )
}
export default Item;