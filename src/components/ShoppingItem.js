import React, { useState, useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/Context"


const ShoppingCard = styled.div`
    background-color: #ffffff;
    text-align: center;
    padding: 30px;
    box-shadow:0 0 10px 4px rgba(0,0,0,0.01);

`

const ShoppingCardTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height: 1rem;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 5px;
    height: 25px;
`

const ShoppingCardImg = styled.img`
    height: 150px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
`

const ShoppingCardDescription = styled.p`
    font-size: .8rem;
    color: #a1a1a1;
    font-style: italic;
    margin-bottom: 25px;
`
const ShoppingCardDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ShoppingCardPrice = styled.span`
`

const ShoppingCardButton = styled.button`
    padding: 5px 20px;   
    background-color: black;
    border: none;
    cursor: pointer;
    color: #ffffff; 
    transform: scale(1);
    transition: transform .1s ease-in-out;

    &:active {
        transform: scale(1.1)
    }
`



const ShoppingCardAmount = styled.input`
    width: 30px;
    padding: 5px;
    font-size: .8rem;
    border: 2px solid #eee;
    margin-left: auto;
    margin-right: 2px;
`

const ShoppingItem = ({title, image, description, price}) => {
    const context = useContext(CartContext);

    const [amount, setAmount] = useState(1);
    const [totalItemPrice, setTotalItemPrice] = useState(price);

    const addToCartItem = (title, description, image, price, amount) => {
        context.setItemsInChart(prevItems => [...prevItems, {title, description, image, price, amount}])
        console.log(context.itemsInChart)
    }

    const changeAmount = (value) => {
        if (value <= 0) {
            setAmount(1);
            value = 1;
        }
        setAmount(value);
        setTotalItemPrice(value*price);
    }

    return(
        <>
            <ShoppingCard>
                <ShoppingCardImg src={image}></ShoppingCardImg>
                <ShoppingCardTitle>
                    {
                            title.length > 40 ?
                        `${title.substring(0, 40)}...` : title
                    }
                    </ShoppingCardTitle>
                <ShoppingCardDescription>
                   {
                        description.length > 30 ?
                    `${description.substring(0, 30)}...` : description
                   }
                </ShoppingCardDescription>
                <ShoppingCardDetails>
                    <ShoppingCardPrice>${totalItemPrice}</ShoppingCardPrice>
                    <ShoppingCardAmount type="number" onChange={(e) => changeAmount(e.target.value)} value={amount} min={1}></ShoppingCardAmount>
                    <ShoppingCardButton onClick={() => addToCartItem(title, description, image, totalItemPrice, amount)}>buy</ ShoppingCardButton>
                </ShoppingCardDetails>
            </ShoppingCard>
        </>
    )
}



export default ShoppingItem