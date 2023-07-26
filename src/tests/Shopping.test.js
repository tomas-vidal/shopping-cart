import { render } from "@testing-library/react";
import {describe, it} from '@jest/globals'
import Shopping from "../components/Shopping"

describe("Shopping page tests", () => {
    
    const fetchedData = {
        title: "hola",
        image: "www.google.com",
        description: "test",
        price: "price"
    }

    window.fetch = jest.fn(() =>
        Promise.resolve({
        json: () => Promise.resolve(fetchedData),
        })
     );

    beforeEach( () => {
        fetch.mockClear();
    })

    it("should render shopping component",  () => {
        render(<Shopping />)

        expect(fetch).toHaveBeenCalledTimes(1);
    })
})