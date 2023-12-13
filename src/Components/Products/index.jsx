import React, { useContext, useEffect, useState } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'
import { BasketContext } from '../../Context/BasketContext'
import Modal from '../Modal'
import "./style.scss"

function Products() {
    const { basket, addToBasket, removeFromBasket, incCount, decCount, toggleBasketSideBar } = useContext(BasketContext)

    const { wishlist, toggleItemWishlist, checkIfInWishlist } = useContext(WishlistContext)

    const [inp, setInp] = useState("")

    const [toggleSearch, setToggleSearch] = useState(false)

    const [idForModal, setIdForModal] = useState("")

    const [toggleModal, setToggleModal] = useState(false)

    const [category, setCategory] = useState("")

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
            .then(res => res.json())
            .then(data => setApiData(data))

    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section id='products'>
            <div className="productsFilter">
                <div className="text">PRODUCT OVERVIEW</div>
                <div className="filterCont">
                    <div className="categoriesFilter">
                        <span className={` ${category === "" && "underlined"}`} onClick={(e) => { setCategory(""); }}>All categories</span>
                        <span className={` ${category === "mens" && "underlined"}`} onClick={(e) => { setCategory("mens"); }}>Men</span>
                        <span className={` ${category === "womens" && "underlined"}`} onClick={(e) => { setCategory("womens"); }}>Women</span>
                        <span className={` ${category === "kids" && "underlined"}`} onClick={(e) => { setCategory("kids"); }}>Kids</span>
                    </div>
                    <div className="searchCont" >
                        <span className='openSearch' onClick={() => setToggleSearch(!toggleSearch)}>Search <i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div className={toggleSearch ? "dropDown visibleDropDown" : "dropDown"}>
                    <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
                </div>
            </div>
            <div className="cardCont">
                {toggleModal ? <Modal ifModalToggle={toggleModal} setModalToggle={setToggleModal} idModal={idForModal} ></Modal> : null}
                {apiData && apiData.map((x) => {
                    if (x.category.toLowerCase() === category.toLowerCase() || category === "") {
                        if (x.name.toLowerCase().includes(inp.toLowerCase())) {
                            return <>
                                <div className="card" key={x.id}>
                                    <div className="img">
                                        <img src={x.images} alt="" />
                                        <div className="hoverCard">
                                            <div className="details" onClick={() => { setIdForModal(x.id); setToggleModal(!toggleModal) }} >Details</div>
                                        </div>
                                    </div>
                                    <div className="name">{x.name}</div>
                                    <div className="price">${x.price}</div>

                                </div>
                            </>
                        }
                    }
                }

                )}
            </div>
        </section>
    )
}

export default Products