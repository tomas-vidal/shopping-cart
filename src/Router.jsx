import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shopping from "./components/Shopping";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

const Router = ({ children }) => {

    const router = createBrowserRouter([{
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "shopping",
                element: <Shopping />   
            },
            {
                path: "shoppingcart",
                element: <ShoppingCart />
            }
        ]
    },])

    return(
        <RouterProvider router={router}>
            { children }
        </RouterProvider>
    )
}

export default Router