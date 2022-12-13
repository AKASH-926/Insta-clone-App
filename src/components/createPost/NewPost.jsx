import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../header/header'
import Loader from '../loaders/loader'

import "./NewPost.css"
export default function NewPost() {
    const history = useNavigate()
    const [post, setpost] = useState({ PostImage: "", name: "", location: "", description: "" })
    const [buffer, setbuffer] = useState(true)
    const [err, seterr] = useState({ img: true, commonErr: true })
    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    }
    const handleClick = async (e) => {
        if (post.name !== "" && post.location !== "" && post.description !== "") {
            seterr({ ...err, commonErr: true })
            setbuffer(false)
            e.preventDefault()
            await axios.post("https://insta-clone-api-isco.onrender.com/instaclone/data", post, config).then((response) => {
                setbuffer(true)

            })
            history("/instaclone")
        } else {
            seterr({ ...err, commonErr: false })
        }

    }
    return (
        <>
            <Header />
            {buffer ? <div id='file-container'>
                <div id='file-wrap'>
                    <form method='POST'>
                        <div id='image_cont'>
                            <input type="file" name="PostImage" id="file" onChange={(e) => {
                                if (e.target.files[0].size <= 200000) {
                                    setpost({ ...post, PostImage: e.target.files[0] })
                                    seterr({ ...err, img: true })
                                } else {
                                    seterr({ ...err, img: false })
                                }

                            }} />
                        </div>
                        <div id='Auth_cont'>
                            <input type="text" name="name" id="author" placeholder='Author' required onChange={(e) => {

                                setpost({ ...post, name: e.target.value })
                            }} />
                            <input type="text" name="location" id="location" placeholder='Location' required onChange={(e) => {
                                setpost({ ...post, location: e.target.value })
                            }} />
                        </div>
                        <div id='desc_cont'>
                            <input type="text" name="description" id="description" placeholder='Description' required onChange={(e) => {
                                setpost({ ...post, description: e.target.value })
                            }} />
                        </div>
                        <button id='post_butn' type='submit' disabled={false} onClick={handleClick}>POST</button>
                    </form>

                </div>

            </div> : <Loader />}
            <div className='err'>{err.img ? <span></span> : <p>Please Upload images below 200KB</p>}</div>
            <div className='err'>{err.commonErr ? <span></span> : <p>All Feilds are Mandatory</p>}</div>

        </>
    )
}
