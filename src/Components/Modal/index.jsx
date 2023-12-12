import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { BasketContext } from '../../Context/BasketContext'

function Modal({ ifModalToggle, setModalToggle, idModal }) {

    const { basket, addToBasket, removeFromBasket, incCount, decCount } = useContext(BasketContext)

    const [item, setItem] = useState()

    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" + idModal)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <>
            <div className="modal">
                <div className="modalContent">
                    <div className="closeModal" onClick={() => setModalToggle(!ifModalToggle)}><i class="fa-solid fa-x"></i></div>
                    <div className="image"><img src={item && item.images} alt="" /></div>
                    <div className="itemDetails">
                        <div className="itemName">{item && item.name}</div>
                        <div className="itemPrice">${item && item.price}</div>
                        <div className="addToBasket" onClick={() => addToBasket(item)}><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal