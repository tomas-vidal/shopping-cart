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

    const changeAmountItem = (id, value) => {
        const itemArray = itemsInChart.map( (item) => {
            if (item.id === id) {
                return {
                    ...item,
                    amount: value,
                }
            } else {
                return item
            }
        });
        setItemsInChart(itemArray);
        
    }

    return(
        <CartContext.Provider value={{...providedProps, deleteItem, changeAmountItem}}>
            {children }
        </CartContext.Provider>
    )

}

export default Context