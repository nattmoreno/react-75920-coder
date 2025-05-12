import { Link } from "react-router";
import CartWidget from "./CartWidget";
import Logo from "../assets/images/logo_libreria_blanco.png";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Logo de la tienda" />
            </Link>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/category/physical">Libros impresos</Link>
                    </li>
                    <li>
                        <Link to="/category/ebook">E-books</Link>
                    </li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
