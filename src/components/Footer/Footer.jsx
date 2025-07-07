import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Somos Moon. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;