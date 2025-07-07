import Item from '../Item/Item';
import './ItemListContainer.css';
import getProductos from '../../services/mockService';
import { useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [allProductos, setAllProductos] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoria } = useParams();

    useEffect(() => {
        if (allProductos.length === 0) {
            setLoading(true);
            getProductos()
                .then( result => {
                    setAllProductos(result);
                    setProductos(result);
                    setLoading(false);
                })
                .catch((err) => {alert(err)});
        };
        if (categoria) {
            setProductos(
                allProductos.filter(el => el.category === categoria)
            );
        } else {
            setProductos(allProductos);
        }
    }, [categoria]);

    return (
        <div className="item-list-container">
            <div className="product-list">
                {loading ? (
                    <Loader />
                ) : productos.length > 0 ? (
                    productos.map((elem) => (
                        <Item
                            key={elem.id}
                            name={elem.name}
                            description={elem.description}
                            price={elem.price}
                            img={elem.img}
                            stock={elem.stock}
                            category={elem.category}
                        />
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )}
            </div>
        </div>
    );
}

export default ItemListContainer;