import React from 'react';
import "./landing_page.css"
import { Link } from "react-router-dom"
export default function Landing_page() {
    return (
        <div className='main_container'>
            <div className='imgcontainer'><img id='welcomeimg' src="/landing.png" alt="welcome image" /></div>
            <div className='msgcontainer'>
                <h1>INSTACLONE</h1>
                <button id="enterbutton"><Link className='link' to="/instaclone">Enter</Link></button>
            </div>

        </div>
    )
}