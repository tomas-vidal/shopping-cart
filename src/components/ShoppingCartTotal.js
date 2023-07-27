import React, { useContext, useState, useEffect} from "react"
import styled from "styled-components"
import { CartContext } from "../context/Context"


const FooterTotal = styled.footer`
    height: 100px;
    margin-top: auto;
    width: 100%;
    background-color: #ffffff;
    display: grid;
    justify-content: center;
    grid-template-columns: 10% 10% 60%;
    align-items: center;
`

const ShoppingCardTotalButton = styled.button`
    padding: 15px 80px;   
    background-color: black;
    border: none;
    cursor: pointer;
    color: #ffffff; 
    transform: scale(1);
    transition: transform .1s ease-in-out;
    justify-self: self-end;

    &:active {
        transform: scale(1.1)
    }
`

const TotalTitle = styled.p`
    font-size: 2rem;
    font-weight: bold;
`

const TotalPrice = styled.span`
    padding-top: 5px;
`

const ShoppingCartTotal = () => {
    const [totalCart, setTotalCart] = useState(0);
    const context = useContext(CartContext)

    useEffect( () => {
        let sumTotal = 0;
        context.itemsInChart.forEach( (item) => {
            sumTotal += item.price * item.amount;
        })
        setTotalCart(sumTotal)
    }, [context.itemsInChart])


    return(
        <FooterTotal>
            <TotalTitle>TOTAL:</TotalTitle>
            <TotalPrice>${totalCart}</TotalPrice>
            <ShoppingCardTotalButton>BUY</ShoppingCardTotalButton>
        </FooterTotal>
    )
}

export default ShoppingCartTotal