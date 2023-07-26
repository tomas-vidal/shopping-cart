import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/Context"
import ItemShoppingCart from "./ItemShoppingCart"

const CartsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`


const ShoppingCart = () => {
    const context = useContext(CartContext);
    
    return(
        <CartsContainer>
            {context.itemsInChart && context.itemsInChart.map( (item) => {
               return <ItemShoppingCart title={item.title} image={item.image} description={item.description} price={item.price} amount={item.amount}/>
                
            })}
        </ CartsContainer>
    )
}

export default ShoppingCart