import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Cart from '../Cart/Cart';
import { Link } from "react-router-dom"
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.scss"
import { useSelector } from "react-redux"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.cart.products)

    return (
        <div className='navBar'>
            <div className="wrapper">
                <div className="navLeft">
                    <div className="item">
                        Empty
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Accesories</Link>
                    </div>
                </div>
                <div className="navCenter">
                    <Link className='link' to="/">Fancy Store</Link>
                </div>
                <div className="navRight">
                    <div className="item">
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <SearchIcon />
                        </div>
                        <div className="icon">
                            <FavoriteBorderIcon />
                        </div>
                        <div className="icon">
                            <PersonIcon />
                        </div>
                        <div className="icon">
                            <div className="cart" onClick={() => setOpen(!open)}>
                                <ShoppingCartIcon />
                                <span>{products.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div >
    )
}

export default Navbar
