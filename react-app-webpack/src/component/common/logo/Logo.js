import React from 'react'
import image from '../logo/image.png'
import '../logo/Logo.css'

function Logo () {
    return (
        <div className="logo" >
            <img src={image} width="230px" height="130px"></img>
        </div>
    )
}

export default Logo