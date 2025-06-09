import Item from '../Item/Item';
import './ItemListContainer.css';

function ItemListContainer({greetings}) {
    return (
        <>
        <h2>{greetings}</h2>
        <Item
        title= 'Conjunto Negro'
        text= 'Conjunto Encaje Negro'
        price= '$15000'
        img= 'https://img.freepik.com/foto-gratis/arreglo-lenceria-femenina-bodegon_23-2150411274.jpg?semt=ais_hybrid&w=740'
        />
        </>
    );
};

export default ItemListContainer;