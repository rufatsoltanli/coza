import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import "./style.scss"

function Basket() {
  const { toggleBasketSideBar, setToggleBasketSideBar, removeFromBasket, basket } = useContext(BasketContext)
  return (
    <>
      <div id="basketContainer" className={toggleBasketSideBar ? "basketVisible" : null}>
        <div className="closeBasket" onClick={() => setToggleBasketSideBar(!toggleBasketSideBar)}>X</div>
        <h1>Your basket</h1>
        {
          basket.map((x) => (
            <div className="basketCard">
              <div className="removeFromBasket" onClick={() => removeFromBasket(x)}>X</div>
              <div className="basketCardImg"><img src={x.images} alt="" /></div>
              <div className="basketCardDetails">
                <div className="name">{x.name}</div>
                <div className="price">{x.price}</div>

              </div>
            </div>
          ))
        }
      </div >
    </>
  )
}

export default Basket