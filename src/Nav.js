import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from './features/userSlice'

import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false)
    const history=useHistory()
    const user = useSelector(selectUser)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }

    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                onClick={()=>{history.push("/")}}
                    className="nav__logo"
                    src="https://i.ibb.co/CPKdPtt/2021-02-16.png"
                    alt=""
                />
                <div onClick={()=>{history.push("./profile")}}
                    className="nav__avatar"
                    // src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""> 
                    {user.email.charAt(0).toUpperCase()}
                </div>
               

            </div>

        </div>
    )
}

export default Nav
