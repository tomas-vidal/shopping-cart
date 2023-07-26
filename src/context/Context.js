import React, { createContext, useState } from "react";
export const CartContext = createContext("");

const Context = ({  children  }) => {
    const [itemsInChart, setItemsInChart] = useState([]);

    const providedProps = {
        itemsInChart,
        setItemsInChart
    }

    const deleteItem = (id) => {
        setItemsInChart(prevItems => prevItems.filter( item => item.id !== id))

    }

    return(
        <CartContext.Provider value={{...providedProps, deleteItem}}>
            {children }
        </CartContext.Provider>
    )

}

export default Context