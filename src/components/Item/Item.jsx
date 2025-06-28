import './Item.css';

function Item (props) {
    const{price, name, description, img } = props;

    return (
        <div className="card">
            <div className="card-content">
                <img src={img} className="card-image" alt={name} />
                <div className="card-content">
                    <h3 className="card-title" >{name}</h3>
                    <p className="card-description" >{description}</p>
                    <p className="card-price">Precio: ${price}</p>
                </div>
                <div className="card-footer">
                    <button className="card-button">Agregar al carrito</button>
                </div>
            </div>
        </div>	  	
    )
            }
            export default Item;