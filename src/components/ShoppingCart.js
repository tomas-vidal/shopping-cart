import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/Context"
import ItemShoppingCart from "./ItemShoppingCart"
import ShoppingCartTotal from "./ShoppingCartTotal"

const CartsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex: 1;
`

const ShoppingCart = () => {
    const context = useContext(CartContext);

    if (context.itemsInChart.length > 0) {
        return(
                <CartsContainer>
                    {context.itemsInChart.map( (item) => {
                return <ItemShoppingCart title={item.title} image={item.image} description={item.description} price={item.price} amount={item.amount} id={item.id}/>
                    
                })}
                <ShoppingCartTotal />
                </ CartsContainer>
        )
    } else {
        return (
            <CartsContainer>
                <h2>No items yet...</h2>
            </CartsContainer>
        )
    }
    
}

export default ShoppingCart