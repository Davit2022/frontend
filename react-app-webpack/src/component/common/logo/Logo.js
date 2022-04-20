import React from 'react'
// import '../logo/Logo.css'

const Logo = (props) => {
    console.log(props);
    return (
        <div className="logo" >
            <img src={props.src} className={props.className}></img>
        </div>
    )
}

export default Logo
