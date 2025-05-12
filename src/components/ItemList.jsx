import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {products.map((product) => (
                <Item product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ItemList;
