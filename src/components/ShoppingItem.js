import React, { useState } from "react"
import styled from "styled-components"

const ShoppingCard = styled.div`
    border: 1px solid black;
    border-radius: 16px;
    text-align: center;
    padding: 30px;
`

const ShoppingCardTitle = styled.p`
    margin-top: -1rem;
    line-height: 1rem;
    font-size: 1rem;
    font-weight: 700;
    height: 30px;
`

const ShoppingCardImg = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`

const ShoppingCardDescription = styled.p`
    font-size: 1rem;
    font-style: italic;
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
`

const ShoppingCardAmount = styled.input`
    width: 50px;
`

const ShoppingItem = ({title, image, description, price}) => {
    const [amount, setAmount] = useState(1);

    const changeAmount = (value) => {
        setAmount(value);
    }


    return(
        <>
            <ShoppingCard>
                <ShoppingCardTitle>
                    {
                            title.length > 50 ?
                        `${title.substring(0, 50)}...` : title
                    }
                    </ShoppingCardTitle>
                <ShoppingCardImg src={image}></ShoppingCardImg>
                <ShoppingCardDescription>
                   {
                        description.length > 50 ?
                    `${description.substring(0, 50)}...` : description
                   }
                </ShoppingCardDescription>
                <ShoppingCardDetails>
                    <ShoppingCardPrice>${price * amount}</ShoppingCardPrice>
                    <ShoppingCardAmount type="number" onChange={(e) => changeAmount(e.target.value)} value={amount} defaultValue={1} min={1}></ShoppingCardAmount>
                    <ShoppingCardButton>buy</ ShoppingCardButton>
                </ShoppingCardDetails>
            </ShoppingCard>
        </>
    )
}



export default ShoppingItem