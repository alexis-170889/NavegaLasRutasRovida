import Item from '../Item/Item';
import './ItemListContainer.css';

const productos = [
    {
        name: "Vedetina Algodón Classic",
        description: "Vedetina de algodón suave y cómodo, ideal para el uso diario.",
        price: 1200,
        img: "/public/Img/vedetina algodon 4.jpg",
        stock: 15,
        category: "Ropa interior Mujer"
    },
    {
        name: "Boxer Hombre Microfibra",
        description: "Boxer deportivo en microfibra transpirable, corte ajustado.",
        price: 1800,
        img: "/public/Img/BOXER 1.jpg",
        stock: 20,
        category: "Boxers"
    },
    {
        name: "Medias Tobilleras Algodón",
        description: "Pack x3 medias tobilleras en algodón premium, varios colores.",
        price: 1500,
        img: "/public/Img/soquete 3.jpg",
        category: "Medias"
    },
    {
        name: "Conjunto Encaje Negro",
        description: "Elegante conjunto de corpiño y bombacha en encaje negro.",
        price: 3500,
        img: "/public/Img/conjunto canela .jpg",
        stock: 8,
        category: "Ropa interior Mujer"
    },
    {
        name: "Colaless",
        description: "Colaless sin costuras para uso con prendas ajustadas.",
        price: 950,
        img: "/public/Img/colaless.JPG",
        stock: 25,
        category: "Ropa interior Mujer"
    },
    {
        name: "Pijama Algodón",
        description: "Pijama completo de algodón.",
        price: 4200,
        img: "/public/Img/pijama mujer.jpg",
        stock: 12,
        category: "Pijamas"
    },
    {
        name: "Bombis Niñas Estampados",
        description: "Pack x2 bombis para niñas con divertidos estampados.",
        price: 1600,
        img: "/public/Img/bombis niñas.jpg.jpg",
        stock: 18,
        category: "Niños"
    },
    {
        name: "Boxer Niños",
        description: "Pack x3 boxers para niños con estampados de superhéroes.",
        price: 2200,
        img: "/public/Img/BOXER UOMO NIÑOS 8 A 10 AÑOS.jpg.jpg",
        stock: 15,
        category: "Niños"
    },
    {
        name: "Vedetina Encaje Bordado",
        description: "Vedetina premium en encaje con detalles bordados.",
        price: 1900,
        img: "/public/Img/vedetina puntilla 3.jpg.jpg",
        stock: 10,
        category: "Ropa interior Mujer"
    },
    {
        name: "Boxer Bambú Ecológico",
        description: "Boxer ultra suave en fibra de bambú, hipoalergénico.",
        price: 2500,
        img: "/public/Img/boxer 2.jpg.jpg",
        stock: 14,
        category: "Boxers"
    },
    {
        name: "Medias Largas Invierno",
        description: "Medias largas de lana merino para clima frío.",
        price: 2100,
        img: "/public/Img/PANTY 1.png.jpg",
        stock: 9,
        category: "Medias"
    },
    {
        name: "Conjunto deportivo",
        description: "Conjunto deportivo de algodon.",
        price: 3800,
        img: "/public/Img/Conjunto Deportivo Mujer.jpg.jpg",
        stock: 6,
        category: "Ropa interior Mujer"
    },
    {
        name: "Colaless Algodón Orgánico",
        description: "Colaless de algodón orgánico, suave y transpirable.",
        price: 1300,
        img: "/public/Img/CULOTTE SAYKA.jpg.jpg",
        stock: 22,
        category: "Ropa interior Mujer"
    },
    {
        name: "Pijama Felpa Canguro",
        description: "Pijama abrigado con capucha tipo canguro en felpa.",
        price: 4700,
        img: "/public/Img/pijama felpa.jpg.jpg",
        stock: 7,
        category: "Pijamas"
    },
    {
        name: "Bombis Niñas Fantasia",
        description: "Bombis con estampados y detalles brillantes.",
        price: 1750,
        img: "/public/Img/BOMBACHAS NIÑA .jpg.jpg",
        stock: 11,
        category: "Niños"
    },
    {
        name: "Boxer Niños Batman",
        description: "Pack x4 boxers para niños con estampas.",
        price: 2400,
        img: "/public/Img/BOXER UOMO ESTAMPADO .jpg",
        stock: 13,
        category: "Niños"
    }
];

function ItemListContainer({greetings}) {
    return (
        <>
        <h2>{greetings}</h2>
        <hr></hr>
        {
            products.map( elem => <h3 key={elem}>{elem}</h3>)
        }
        </>
    );
};

export default ItemListContainer;