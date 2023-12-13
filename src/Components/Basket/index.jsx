import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import "./style.scss"

function Basket() {
  const { totalPrice, toggleBasketSideBar, setToggleBasketSideBar, removeFromBasket, basket, incCount, decCount } = useContext(BasketContext)
  return (
    <>
      <div id="basketContainer" className={toggleBasketSideBar ? "basketVisible" : null}>
        <div className="closeBasket" onClick={() => setToggleBasketSideBar(!toggleBasketSideBar)}>X</div>
        <h1>Your basket</h1>
        <h1>Total Price : {totalPrice()} $</h1>
        {
          basket.map((x) => (
            <div className="basketCard">
              <div className="removeFromBasket" onClick={() => removeFromBasket(x)}>X</div>
              <div className="basketCardImg"><img src={x.images} alt="" /></div>
              <div className="basketCardDetails">
                <div className="name">{x.name}</div>
                <div className="price">${(x.price*x.count).toFixed(2)}</div>
                <div className="itemCount">
                  <div className="count">{x.count}</div>
                  <button onClick={() => incCount(x)}>+</button>
                  <button onClick={() => decCount(x)}>-</button>
                </div>
              </div>
            </div>
          ))
        }
      </div >
    </>
  )
}

export default Basket