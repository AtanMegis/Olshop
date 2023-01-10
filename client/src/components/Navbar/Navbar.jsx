import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart/Cart.jsx'
import './Navbar.scss'
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const [openCart, setOpenCart] = useState(false)
  const products = useSelector((state) => state.cart.products)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="products/1">Pria</Link>
          </div>
          <div className="item">
            <Link className="link" to="products/2">Wanita</Link>
          </div>
          <div className="item">
            <Link className="link" to="products/3">Anak</Link>
          </div>
        </div>
        <div className="center">
          <div className="center">
            <Link className="link" to="/" >OnlineShop</Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/" >Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" >Kontak Kami</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" >Tentang Kami</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={(e) => setOpenCart(!openCart)}>
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  )
}

export default Navbar