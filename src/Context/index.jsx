import React, { Children } from 'react'
import BasketProvider from './BasketContext'

function MainProvider({ children }) {
    return (
        <BasketProvider>{children}</BasketProvider>
    )
}

export default MainProvider