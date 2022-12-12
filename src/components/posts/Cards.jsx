import React from 'react'
import "./cards.css"
import fav from "./heart.png"
import send from "./send.png"
export default function Cards() {
    return (
        <div id='card-container'>
            <div id='card-wrap'>
                <div id='sub1'>
                    <div id='name'><span id='name'>Siva</span> <span id='dots'>...</span></div><div id='place'>
                        <span>Bengaluru</span>
                    </div>
                </div>
                <div id='sub2'>
                    <img id='post-image' src="/person.jpg" alt="post" />
                </div>
                <div id='sub3'>
                    <div id='icons_date'><img src={fav} alt="favorites" /> <img src={send} alt="send" /> <span id='date'>10 jan 2021</span></div>
                    <div id='likes'><p>64 likes</p></div>
                    <div id='desc'><p>Kick start Your career</p></div>
                </div>

            </div>

        </div>
    )
}
