import Item from '../Item/Item';
import './ItemListContainer.css';
import getProductos from '../../services/mockService';
import { useEffect, useState } from 'react';
import Loader from '/src/components/Loader/Loader';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [allProductos, setAllProductos] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);



    const { categoria } = useParams();

    const filterProductos = (arrayProductos, category) => {
        if (category) {
            setProductos(
                arrayProductos.filter(el => el.category === categoria));
        } else {
            setProductos(arrayProductos);
        };
    }

    useEffect(() => {
        if (allProductos.length === 0) {
            setLoading(true);
            getProductos()
                .then(result => {
                    setAllProductos(result);
                    setProductos(result, categoria);
                    setLoading(false);
                })
                .catch((err) => { alert(err) });
        } else {
            filterProductos(allProductos, categoria);
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
                            id={elem.id}
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