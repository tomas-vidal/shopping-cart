import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return( 
    <nav>
        <ul>
            <Link to="">Home</ Link>
            <Link to="shopping">Shopping</Link> 
        </ul>
    </nav>
    )
}

export default Navbar