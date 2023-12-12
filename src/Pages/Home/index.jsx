import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import Modal from '../../Components/Modal'
import { BasketContext } from '../../Context/BasketContext'
import Basket from '../../Components/Basket'


function HomePage() {

  const { basket, addToBasket, removeFromBasket, incCount, decCount, toggleBasketSideBar } = useContext(BasketContext)

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
        <section id='products'>
          <div className="productsFilter">
            <div className="text">PRODUCT OVERVIEW</div>
            <div className="filterCont">
              <div className="categoriesFilter">
                <span className={` ${category === "" && "underlined"}`} onClick={(e) => { setCategory(""); }}>All categories</span>
                <span className={` ${category === "mens" && "underlined"}`} onClick={(e) => { setCategory("mens"); }}>Men</span>
                <span className={` ${category === "womens" && "underlined"}`} onClick={(e) => { setCategory("womens"); }}>Women</span>
                <span className={` ${category === "kids" && "underlined"}`} onClick={(e) => { setCategory("kids"); }}>Kids</span>
              </div>
              <div className="searchCont"></div>
            </div>
          </div>
          <div className="cardCont">
            {toggleModal ? <Modal ifModalToggle={toggleModal} setModalToggle={setToggleModal} idModal={idForModal} ></Modal> : null}
            {apiData && apiData.map((x) => {
              if (x.category.toLowerCase() === category.toLowerCase() || category === "") {
                return <>
                  <div className="card" key={x.id}>
                    <div className="img">
                      <img src={x.images} alt="" />
                      <div className="hoverCard">
                        <div className="details" onClick={() => { setIdForModal(x.id); setToggleModal(!toggleModal) }} >Details</div>
                      </div>
                    </div>
                    <div className="name">{x.name}</div>
                    <div className="price">${x.price}</div>

                  </div>
                </>
              }
            }

            )}
          </div>
        </section>
      </section >
    </>)
}

export default HomePage