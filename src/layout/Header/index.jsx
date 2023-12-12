import React, { useContext } from 'react'
import "./style.scss"
import { NavLink } from "react-router-dom";
import useNavScroll from '../../hook/useNavScroll';
import { BasketContext } from '../../Context/BasketContext';

function Header() {


  const { toggleBasketSideBar, setToggleBasketSideBar, basket } = useContext(BasketContext)

  const [scroll] = useNavScroll(100)
  return (
    <header>
      <div className="headerCont">
        <div className="headerContent">
          <div className="leftSide">
            <div className="shipping">Free shipping for standard order over $100</div>
          </div>
          <div className="rightSide">
            <div className="help"><span>Help & FAQs</span></div>
            <div className="myAccount"><span>My Account</span></div>
            <div className="leanguage"><span>EN</span></div>
            <div className="currency"><span>EUR</span></div>
          </div>
        </div>
      </div>
      <nav
        className={`nav ${!scroll ? "activeNav" : null}`}
      >
        <div className="navCont">
          <div className="leftSide">
            <div className="image"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" /></div>
            <div className="links">
              <div className="linkHome"><NavLink to={"/"}>Home</NavLink></div>
              <div className="linkShop"><NavLink to={"/shop/"}>Shop</NavLink></div>
              <div className="linkFeatures"><NavLink to={"/features/"}>Features</NavLink><div className="hot">HOT</div></div>
              <div className="linkBlog"><NavLink to={"/blog/"}>Blog</NavLink></div>
              <div className="linkAbout"><NavLink to={"/about/"}>About</NavLink></div>
              <div className="linkContact"><NavLink to={"/contact/"}>Contact</NavLink></div>
            </div>
          </div>
          <div className="rightSide">
            <div className="searchIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div className="basketIcon" onClick={() => setToggleBasketSideBar(!toggleBasketSideBar)}><i class="fa-solid fa-cart-shopping"></i> <sup className='count'>{basket.length}</sup> </div>
            <div className="wishListIcon"><i class="fa-regular fa-heart"></i> <sup className='count'></sup> </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header