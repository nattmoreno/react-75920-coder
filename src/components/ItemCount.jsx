import { useState } from "react";

function ItemCount() {
    const [contador, setContador] = useState(0);

    function sumar() {
        setContador(contador + 1);
    }

    function restar() {
        setContador(contador - 1);
    }

    return (
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button>
        </div>
    );
}

export default ItemCount;
