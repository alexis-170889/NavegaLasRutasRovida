import { useEffect, useState } from 'react';
import getProductos from '../../services/mockService';
import Item from '../Item/Item';
import './ItemListContainer.css';
import Loader from '../../Loader/Loader';



function ItemListContainer({ greetings }) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProductos().then((result) => {
            setProductos(result);
            setLoading(false);
        }).catch((error) => { alert(err) });
    }, []);


    return (
        <div className="item-list-container">
            <div className="product-list">
                {
                    loading ? <Loader/> :
                        productos.length > 0 ?
                            productos.map(elem =>
                                <Item
                                    key={elem.id}
                                    name={elem.name}
                                    description={elem.description}
                                    price={elem.price}
                                    img={elem.img}
                                />
                            ) : <p>No hay productos disponibles</p>}
            </div>
        </div>
    );
}
export default ItemListContainer;