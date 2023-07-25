import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
    const NavItem = styled.li`
    list-style: none;
  `

    const NavList = styled.ul`
    display: flex;
    gap: 10px;
    margin: auto;
`

    const Nav = styled.nav`
    display: flex;
    padding: 20px;
`



    return( 
    <Nav>
        <NavList>
            <NavItem>
                <Link to="">Home</ Link>
            </NavItem>
            <NavItem>
                <Link to="shopping">Shopping</Link> 
            </NavItem>
        </NavList>
    </Nav>
    )
}

export default Navbar