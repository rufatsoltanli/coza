import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { BasketContext } from '../../Context/BasketContext'
import { WishlistContext } from '../../Context/WishlistContext'

function Modal({ ifModalToggle, setModalToggle, idModal }) {

    const { basket, addToBasket, removeFromBasket, incCount, decCount } = useContext(BasketContext)

    const { wishlist, toggleItemWishlist, checkIfInWishlist } = useContext(WishlistContext)

    const [item, setItem] = useState()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" + idModal)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setIsLoading(false)
            })

    }, [])

    return (
        <>
            <div className="modal">
                <div className="modalContent">
                    <div className="closeModal" onClick={() => setModalToggle(!ifModalToggle)}><i class="fa-solid fa-x"></i></div>
                    {isLoading ? <h1><i class="fa-solid fa-spinner fa-spin"></i></h1> :
                        <>
                            <div className="image"><img src={item && item.images} alt="" /></div>
                            <div className="itemDetails">
                                <div className="itemName">{item && item.name}</div>
                                <div className="itemPrice">${item && item.price}</div>
                                <div className="addToBasket" onClick={() => addToBasket(item)}>Add to Cart <i class="fa-solid fa-cart-shopping"></i></div>
                                <div className={checkIfInWishlist(item) ? "addToWishList addedToWish" : "addToWishList"} onClick={() => toggleItemWishlist(item)}>
                                    <i class={checkIfInWishlist(item) ? "fa-regular fa-heart " : "fa-regular fa-heart visible"}></i>
                                    <i class={checkIfInWishlist(item) ? "fa-solid fa-heart visible" : "fa-solid fa-heart"}></i>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default Modal