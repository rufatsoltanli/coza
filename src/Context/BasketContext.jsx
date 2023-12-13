import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocalStorage';

export const BasketContext = createContext();


function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStorage("basket", [])

    console.log(basket);
    function addToBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id);
        if (index === -1) {
            setBasket([...basket, { ...item, count: 1 }])
            return
        }
        basket[index].count++
        setBasket([...basket])
    }
    function removeFromBasket(item) {
        setBasket(basket.filter((x) => x !== item))
    }
    function incCount(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        basket[index].count++
        setBasket([...basket])
    }
    function decCount(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        basket[index].count--
        setBasket([...basket])
    }
    function totalPrice() {
        return basket.reduce((prev, x) => prev + x.price * x.count, 0).toFixed(2)
    }
    const [toggleBasketSideBar, setToggleBasketSideBar] = useState(false)

    const data = { toggleBasketSideBar, setToggleBasketSideBar, basket, addToBasket, removeFromBasket, incCount, decCount, totalPrice }

    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider