import React from 'react'
import "./cards.css"
import fav from "./heart.png"
import send from "./send.png"
export default function Cards({ name, location, likes, description, date, PostImage }) {
    return (
        <div id='card-container'>
            <div id='card-wrap'>
                <div id='sub1'>
                    <div id='name'><span id='name'>{name}</span> <span id='dots'>...</span></div><div id='place'>
                        <span>{location}</span>
                    </div>
                </div>
                <div id='sub2'>
                    <img id='post-image' src={PostImage} alt="post" />
                </div>
                <div id='sub3'>
                    <div id='icons_date'><img src={fav} alt="favorites" /> <img src={send} alt="send" /> <span id='date'>{date}</span></div>
                    <div id='likes'><p>{likes}</p></div>
                    <div id='desc'><p>{description}</p></div>
                </div>

            </div>

        </div>
    )
}
