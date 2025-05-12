import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../utils/getProducts";

const ItemListContainer = (props) => {
    // const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response).catch((error) => {
                console.error("Error fetching products:", error);
            });
        });
    }, []);

    return (
        <div className="container">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
