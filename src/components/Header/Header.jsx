import { Link } from "react-router-dom";
import "./Header.css";
import CardWidget from "../CardWidget/CardWidget";

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/"><img src="/public/Img/PNG NEGRO LOGO MOON (2).png" alt="Logo Somos Moon" /></Link>
            </div>
            <div className="header-nav-container">
                <nav className="header-nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/productos">Productos</Link>
                    <div className="header-categorias-dropdown">
                        <span>Categorías</span>
                        <div className="header-categorias-menu">
                            <Link to="/productos/categoria/Ropa interior Mujer">Ropa interior Mujer</Link>
                            <Link to="/productos/categoria/Boxers">Boxers</Link>
                            <Link to="/productos/categoria/Medias">Medias</Link>
                            <Link to="/productos/categoria/Pijamas">Pijamas</Link>
                            <Link to="/productos/categoria/Niños">Niños</Link>
                        </div>
                    </div>
                    <Link to="/contacto">Contacto</Link>
                </nav>
                <div className="card-widget-container">
                    <CardWidget />
                </div>
            </div>
        </header>
    );
}

export default Header;