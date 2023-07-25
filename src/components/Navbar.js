import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { PiShoppingCartSimpleBold } from "react-icons/pi"

const NavItem = styled.li`
list-style: none;
`

const NavList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 10px;
`

const Nav = styled.nav`
display: flex;
padding: 10px;
border-bottom: 1px solid grey;
align-items: center;
background: #ffffff;
position: sticky;
top: 0;
`

const LinkItemStyled = styled(NavLink)`
text-decoration: none;
color: #000000;


&:hover {
    color: red;
}

&.active {
    font-weight: bold;
}
`

const ShoppingCartIcon = styled(PiShoppingCartSimpleBold)`
    font-size: 2rem;
    cursor: pointer;
`

const Navbar = () => {
    return( 
    <Nav>
        <NavList>
            <NavItem>
                <LinkItemStyled to="">Home</ LinkItemStyled>
            </NavItem>
            <NavItem>
                <LinkItemStyled to="shopping">Shopping</LinkItemStyled> 
            </NavItem>
        </NavList>
        <ShoppingCartIcon />

    </Nav>
    )
}

export default Navbar