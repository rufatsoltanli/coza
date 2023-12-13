import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

    function toggleItemWishlist(item) {
        const index = wishlist.findIndex((x) => x.id === item.id)
        if (index === -1) {
            setWishlist([...wishlist, item])
            return
        }
        setWishlist(wishlist.filter((x) => x.id !== item.id))
    }

    function checkIfInWishlist(item) {
        if (wishlist.includes(item)) {
            return true
        }
        return false
    }
    const [toggleWishlistBar, setToggleWishlistBar] = useState(false)

    const data = { wishlist, toggleItemWishlist, checkIfInWishlist, toggleWishlistBar, setToggleWishlistBar }

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider