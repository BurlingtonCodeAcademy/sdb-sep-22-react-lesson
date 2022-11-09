import React, { useState, useEffect } from 'react'

function useFetch(url) {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            setError(err)
        })
    }, [url])

    return { data, loading, error }
}

export default useFetch