import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Blog App Header</h1>
            <NavLink exact to="/" activeClassName="active" >Home</NavLink>
            <NavLink to="/blogs" >Blogs</NavLink>
            <NavLink to="/create" >Create</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
        </header>
    )
}

export default Header
