import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Wanita</span>
          <span>Pria</span>
          <span>Anak</span>
          <span>Sepatu</span>
          <span>Aksesoris</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Tentang Kami</h1>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </div>
        <div className="item">
          <h1>Kontak</h1>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">OnlineShop</span>
          <span className="copyright">@ copyright 2023.  All Rights Reserved .</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer