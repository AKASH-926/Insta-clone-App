import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Header from './header/header'
import Cards from './posts/Cards'

import Loader from './loaders/loader';
export default function Homepage() {
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(true)

    useEffect(() => {
        setloader(false)
        axios.get("http://localhost:8000/instaclone/data").then((response) => { { setdata(response.data.Posts) } setloader(true) }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <div>
            <Header />
            {loader ? data.slice(0).reverse().map((val, i) => {
                return (
                    <Cards name={val.name} location={val.location} likes={val.likes} description={val.description} date={val.date} PostImage={val.PostImage} key={i} />
                )
            }) : <Loader />}
        </div>
    )
}
