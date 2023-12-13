import React, { Children } from 'react'
import BasketProvider from './BasketContext'
import WishlistProvider from './WishlistContext'

function MainProvider({ children }) {
    return (
        <BasketProvider>
            <WishlistProvider>{children}</WishlistProvider>
        </BasketProvider>
    )
}

export default MainProvider