import React from 'react'
import "../header/header.css"
export default function Header() {
    return (
        <>
            <div id='header-wrap'>
                <nav id='header-nav'>
                    <ul>
                        <li><img src="/icon.png" alt="insta icon" /></li>
                        <li className='font50px' id="logo">Instaclone</li>
                        <li id='camera-icon'><img src="/camera.png" alt="camera icon" /></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
