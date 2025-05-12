import { Link } from "react-router";

const Item = (props) => {
    return (
        <article className="item">
            {/* <img src={props.product.pictureUrl} alt={`Portada del libro ${props.product.title}`} /> */}
            <h3>{props.product.title}</h3>
            <p>${props.product.price}</p>
            <Link to={`/item/${props.product.id}`}>Ver detalle</Link>
        </article>
    );
};

export default Item;
