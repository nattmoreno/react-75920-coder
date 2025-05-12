import { Link } from "react-router";

const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <article className="item">
            <img src={pictureUrl} alt={`Portada del libro ${title}`} />
            <h3>{title}</h3>
            <p>${price}</p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </article>
    );
};

export default Item;
