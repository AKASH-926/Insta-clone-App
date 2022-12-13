import React from 'react'
import Header from '../header/header'

import "./NewPost.css"
export default function NewPost() {
    return (
        <>
            <Header />
            <div id='file-container'>
                <div id='file-wrap'>
                    <form method='POST'>
                        <div id='image_cont'>
                            <input type="file" name="file" id="file" />
                        </div>
                        <div id='Auth_cont'>
                            <input type="text" name="author" id="author" placeholder='Author' />
                            <input type="text" name="Location" id="location" placeholder='Location' />
                        </div>
                        <div id='desc_cont'>
                            <input type="text" name="description" id="description" placeholder='Description' />
                        </div>
                        <button id='post_butn' type='submit'>POST</button>
                    </form>
                </div>
            </div>
        </>
    )
}
