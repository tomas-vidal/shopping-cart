import React, { createContext, useState } from "react";
export const CartContext = createContext("");

const Context = ({  children  }) => {
    const [itemsInChart, setItemsInChart] = useState([]);

    const providedProps = {
        itemsInChart,
        setItemsInChart
    }


    return(
        <CartContext.Provider value={{...providedProps}}>
            {children }
        </CartContext.Provider>
    )

}

export default Context