import CartIcon from "../assets/images/shopping_cart_icon.svg";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={CartIcon} alt="Carrito de compras" />
            <span className="cart-count">0</span>
        </div>
    );
};

export default CartWidget;
