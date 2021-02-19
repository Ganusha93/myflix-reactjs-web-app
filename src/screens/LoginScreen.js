import React, { useState,useRef } from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

    const [signIn, setSignIn] = useState(false)
    const [email, setEmail] = useState('')
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="https://i.ibb.co/CPKdPtt/2021-02-16.png" />

                <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>
                <div className="loginScreen__gradient"></div>
            </div>

            <div className="loginScreen__body">
                {signIn ? (<SignUpScreen  email={email}/>) :
                    <>
                        <h1>Unlimited films,TV programmes and more.</h1>
                        <h2>Watch anywhere.Cancel at any time</h2>
                        <h3>Ready to watch?Enter your email to create or restart your membership.</h3>
                        <div className="loginScreen__input">
                            <form>
                                <input onChange={event => setEmail(event.target.value)} type="email" placeholder="Email Address" className="email" />
                                <button onClick={() => {setSignIn(true)}} className="loginScreen__getStarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default LoginScreen
