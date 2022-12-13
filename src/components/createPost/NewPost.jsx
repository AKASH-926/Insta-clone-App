import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header'

import "./NewPost.css"
export default function NewPost() {
    const history = useNavigate()
    const [post, setpost] = useState({ PostImage: "", name: "", location: "", description: "" })
    const [buffer, setbuffer] = useState(false)
    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    }
    const handleClick = async (e) => {

        e.preventDefault()
        await axios.post("http://localhost:8000/instaclone/data", post, config).then((response) => {
            console.log(response)
        })
        history("/instaclone")
    }
    return (
        <>
            <Header />
            <div id='file-container'>
                <div id='file-wrap'>
                    <form method='POST'>
                        <div id='image_cont'>
                            <input type="file" name="PostImage" id="file" onChange={(e) => {
                                setpost({ ...post, PostImage: e.target.files[0] })
                            }} />
                        </div>
                        <div id='Auth_cont'>
                            <input type="text" name="name" id="author" placeholder='Author' onChange={(e) => {
                                setpost({ ...post, name: e.target.value })
                            }} />
                            <input type="text" name="location" id="location" placeholder='Location' onChange={(e) => {
                                setpost({ ...post, location: e.target.value })
                            }} />
                        </div>
                        <div id='desc_cont'>
                            <input type="text" name="description" id="description" placeholder='Description' onChange={(e) => {
                                setpost({ ...post, description: e.target.value })
                            }} />
                        </div>
                        <button id='post_butn' type='submit' onClick={handleClick}>POST</button>
                    </form>
                </div>
            </div>
        </>
    )
}
