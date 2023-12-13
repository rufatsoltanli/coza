import React from 'react'
import Products from '../../Components/Products'
import Basket from '../../Components/Basket'
import Wishlist from '../../Components/Wishlist'
import "./style.scss"

function ShopPage() {
  return (
    <section id='shopPage'>
      <Basket />
      <Wishlist />
      <Products />
    </section>
  )
}

export default ShopPage