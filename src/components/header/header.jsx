import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <div id='header-wrap'>
                <nav id='header-nav'>
                    <ul>
                        <li><img src="/icon.png" alt="insta icon" /></li>
                        <li className='font50px' id="logo"><Link to={"/instaclone"}><img src="/instaclone.png" alt="" /></Link> </li>
                        <li id='camera-icon'><Link to={"/add"}><img src="/camera.png" alt="camera icon" /></Link> </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
