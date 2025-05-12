import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../utils/getProducts";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSingleProduct(productId).then((productFromPromise) => {
            setProduct(productFromPromise);
            setLoading(false);
        });
    }, [productId]);

    if (loading)
        return (
            <div>
                <span className="skeleton">&zwnj;</span>
                <span className="skeleton">&zwnj;</span>
                <span className="skeleton">&zwnj;</span>
                <span className="skeleton">&zwnj;</span>
                <span className="skeleton">&zwnj;</span>
            </div>
        );

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
