import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
        <article className={"card"}>
            <img src={props.product?.pictureUrl} />
            <div className={"card-content"}>
                <h3 className={"card-title"}>{props.product?.title}</h3>
                <p>{props.product?.description}</p>
                <p>Precio: {props.product?.price}</p>
                <ItemCount />
            </div>
        </article>
    );
};

export default ItemDetail;
