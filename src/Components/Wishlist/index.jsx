import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'
import "./style.scss"

function Wishlist() {
    const { wishlist, toggleItemWishlist, toggleWishlistBar, setToggleWishlistBar, checkIfInWishlist } = useContext(WishlistContext)
    return (

        <>
            <div id="wishListContainer" className={toggleWishlistBar ? "wishListVisible" : null}>

                <div className="closeWishList" onClick={() => setToggleWishlistBar(!toggleWishlistBar)}>X</div>
                <h1>Your Wishlist</h1>
                {
                    wishlist.map((x) => (
                        <div className="wishListCard">
                            <div className="removeFromwishList" onClick={() => toggleItemWishlist(x)}>{checkIfInWishlist ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</div>
                            <div className="wishListCardImg"><img src={x.images} alt="" /></div>
                            <div className="wishListCardDetails">
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

export default Wishlist