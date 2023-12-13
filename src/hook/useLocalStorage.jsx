import { useEffect, useState } from 'react'

function useLocalStorage(key, initalVal = "") {
    const [value, setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initalVal)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}

export default useLocalStorage