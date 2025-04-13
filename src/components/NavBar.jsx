import CartWidget from "./CartWidget";
import Logo from "../assets/images/logo_libreria_blanco.png";

const NavBar = () => {
    return (
        <header>
            <img src={Logo} alt="Logo de la tienda" />
            <nav className="navbar">
                <ul>
                    <li>
                        {/* No puedo usar la etiqueta Link como se mostró en clase porque para ello
                    debemos importar react-router-dom. Como aun no lo vimos, lo dejo como <a>
                    y cuando llegue el momento serán modificados a <Link>
                    <link> en minúscula se utiliza solo en el head */}
                        <a>Inicio</a>
                    </li>
                    <li>
                        <a>Nuestro catálogo</a>
                    </li>
                    <li>
                        <a>Sobre nosotros</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
