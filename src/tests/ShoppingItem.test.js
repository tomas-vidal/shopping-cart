import { render, screen } from "@testing-library/react";
import {describe, it, beforeEach, expect} from '@jest/globals'
import ShoppingItem from "../components/ShoppingItem"

describe("ShoppingItem component tests", () => {
        const fetchedData = {
            title: "hola",
            image: "www.google.com",
            description: "test",
            price: "price"
        }

        // global.fetch = jest.fn(() =>
        //     Promise.resolve({
        //     json: () => Promise.resolve(fetchedData),
        //     })
        //  );

        // beforeEach( () => {
        //     fetch.mockClear();
        // })

    it("should render shopping cards", () => {
        render(<ShoppingItem title={fetchedData.title} image={fetchedData.image} description={fetchedData.description} price={fetchedData.price}/>)
    })

})