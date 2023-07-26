import React, { useEffect, useState } from "react"
import ShoppingItem from "./ShoppingItem";
import styled from "styled-components"

const ShoppingItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 30px;
    padding: 20px;
    justify-content: center;
`

const Shopping = () => {
    const [dataFetched, setDataFetched] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
        fetch('https://fakestoreapi.com/products?limit=8')
        .then((res) => {
            if (res.status >= 400) {
              throw new Error("server error");
            }
            return res.json();
          })
        .then( (res) => setDataFetched(res))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false))
    }, [])

    if (error) return <p>A network error was encountered</p>;
    if (isLoading) return(<h2>Loading</h2>)

    return(
        <>
            <h2>Shopping</h2>
            <ShoppingItemsContainer>
                {dataFetched.map( (item, key) => {
                    return <ShoppingItem title={item.title} image={item.image} description={item.description} price={Math.round(item.price)} id={item.id}/>
                })}


            </ShoppingItemsContainer>
        </>
    )
}

export default Shopping