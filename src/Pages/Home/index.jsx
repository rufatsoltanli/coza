import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import Modal from '../../Components/Modal'
import { BasketContext } from '../../Context/BasketContext'
import Basket from '../../Components/Basket'
import { WishlistContext } from '../../Context/WishlistContext'
import Wishlist from '../../Components/Wishlist'
import Products from '../../Components/Products'


function HomePage() {

  const { basket, addToBasket, removeFromBasket, incCount, decCount, toggleBasketSideBar } = useContext(BasketContext)

  const { wishlist, toggleItemWishlist, checkIfInWishlist } = useContext(WishlistContext)

  const [inp, setInp] = useState("")

  const [toggleSearch, setToggleSearch] = useState(false)

  const [idForModal, setIdForModal] = useState("")

  const [toggleModal, setToggleModal] = useState(false)

  const [category, setCategory] = useState("")

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
      .then(res => res.json())
      .then(data => setApiData(data))

  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section id='homePage'>
        <Basket />
        <Wishlist />
        <div className="banner">
        </div>
        <div className="trendCont ">
          <div className="trendCard clothes ">
            <h1>Clothes</h1>
            <h4>Winter 2023-2024</h4>
            <div className="hoverCard">
              <h1>Clothes</h1>
              <h4>Winter 2023-2024</h4>
              <div className="text">
                <span>
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
          <div className="trendCard watch">
            <h1>Accessories</h1>
            <h4>Winter 2023-2024</h4>
            <div className="hoverCard">
              <h1>Accessories</h1>
              <h4>Winter 2023-2024</h4>
              <div className="text">
                <span>
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
          <div className="trendCard pourHomme">
            <h1>Pour hommes</h1>
            <h4>Winter 2023-2024</h4>
            <div className="hoverCard">
              <h1>Pour hommes</h1>
              <h4>Winter 2023-2024</h4>
              <div className="text">
                <span>
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
        </div>
        <Products />
      </section >
    </>)
}

export default HomePage