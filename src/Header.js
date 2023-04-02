import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div className='header_search'>
            <input className='headerSearch_input' type="text"/>
           <SearchIcon className="header_searchicon" />
        </div>

        <div className='header_nav'>
            <div className='header_optn'>
                <span className='hdr_optn1'>Hello Guest</span>
                <span className='hdr_optn2'>Sign In</span>
            </div>

            <div className='header_optn'>
                <span className='hdr_optn1'>Returns</span>
                <span className='hdr_optn2'>& Orders</span>
            </div>
            
            <div className='header_optn'>
                <span className='hdr_optn1'>Your</span>
                <span className='hdr_optn2'>Prime</span>
            </div>

            <div className='hdr_AddToCart'>
                <ShoppingCartIcon/>
                <span className='hdr_optn2 hdr_cartCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header