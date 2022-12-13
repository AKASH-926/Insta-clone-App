import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './header/header'
import Cards from './posts/Cards'

export default function Homepage() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/instaclone/data").then((response) => { setdata(response.data.Posts) }).catch((error) => {
            console.log(error)
        })
    }, [])
    // console.log(data)
    return (
        <div>
            <Header />
            {
                data.map((val, i) => {
                    return (
                        <Cards name={val.name} location={val.location} likes={val.likes} description={val.description} date={val.date} PostImage={val.PostImage} key={i} />
                    )
                })
            }

        </div>
    )
}
