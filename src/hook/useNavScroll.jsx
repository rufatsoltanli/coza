import React, { useState } from 'react'

function useNavScroll(start = 100) {
    const [scroll, setScroll] = useState(true)

    document.body.onscroll = () => {
        if (window.scrollY > start) {
            setScroll(false)
        } else
            setScroll(true)
    }

    return (
        [scroll]
    )
}

export default useNavScroll