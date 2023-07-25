import React, { useEffect, useState } from "react"
import ShoppingItem from "./ShoppingItem";
import styled from "styled-components"

const ShoppingItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, clamp(200px, 25%, 300px));
    gap: 20px;
    justify-content: center;
`

const Shopping = () => {
    const [dataFetched, setDataFetched] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
        fetch('https://fakestoreapi.com/products?limit=8')
        .then( (res) => res.json())
        .then( (res) => setDataFetched(res))
        .finally(() => setIsLoading(false))
    }, [])
    console.log(dataFetched); 

    if (isLoading) return(<h2>Loading</h2>)

    return(
        <>
            <h2>Shopping</h2>
            <ShoppingItemsContainer>
                {dataFetched.map( (item, key) => {
                    return <ShoppingItem title={item.title} image={item.image} description={item.description} price={item.price}/>
                })}


            </ShoppingItemsContainer>
        </>
    )
}

export default Shopping