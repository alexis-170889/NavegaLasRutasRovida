import './Inicio.css';

function Inicio() {
    return (
        <div className="nosotros-container">
            <div className="nosotros-banner">
                <img 
                    src="/public/Img/Diseño sin título.png" 
                    alt="Elegancia y comodidad en lencería" 
                    className="nosotros-banner-img"
                />
            </div>
            <h1>Sobre Nosotros</h1>
            <p>
                En <span className="brand-highlight">Somos Moon</span> nos especializamos en ropa interior que combina elegancia, comodidad y confianza. 
                Nos apasiona ofrecer prendas que realcen la belleza y el bienestar, adaptándonos a todos los estilos y necesidades.
            </p>
            <p>
                Nuestra misión es brindar calidad, diseño y una experiencia de compra cálida y cercana. 
                Seleccionamos cuidadosamente cada producto para que te sientas única y segura en cada momento.
            </p>
            <p>
                Detrás de cada prenda hay un equipo comprometido con la excelencia, la atención personalizada y el respeto por nuestros clientes.
            </p>
            <p className="nosotros-agradecimiento">
                ¡Gracias por elegirnos para acompañar tu día a día!
            </p>
            <div className="nosotros-banner">
                <img 
                    src="/public/Img/banner 2.png" 
                    alt="Colección exclusiva de ropa interior" 
                    className="nosotros-banner-img"
                />
            </div>
        </div>
    );
}

export default Inicio;