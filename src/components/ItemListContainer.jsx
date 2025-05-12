import { useEffect, useState } from "react";
import { getProducts, getCategoryTitle } from "../utils/getProducts";
import ItemList from "./ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProducts(categoryId)
            .then((products) => {
                setProducts(products);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error cargando productos:", error);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) return <span className="loader"></span>;
    return (
        <div>
            <h2 className="category-title">{getCategoryTitle()}</h2>
            {products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <p className="no-products">No hay productos disponibles en esta categoría.</p>
            )}
        </div>
    );
}

export default ItemListContainer;
