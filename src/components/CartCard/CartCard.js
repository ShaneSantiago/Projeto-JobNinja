import React from "react"
import { Card } from "./styled"

const CartCard = (props) => {
    return (
        <Card>
            <h3>{props.title}</h3>
            <p>R${props.price.toFixed(2)}</p>
            <button onClick={() => props.removeFromCart(props.id)}>Remover</button>
        </Card>
    )
}

export default CartCard