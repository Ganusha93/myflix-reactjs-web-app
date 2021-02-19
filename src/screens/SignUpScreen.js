import React, { useRef, useState } from 'react'
import { auth } from '../firebase';
import "./SignUpScreen.css"

function SignUpScreen({ email }) {

    const emailRef = useRef(email);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [isRegitered, setIsRegistered] = useState(false)

    const register = (e) => {
        e.preventDefault();

        if (passwordRef.current.value === confirmPasswordRef.current.value) {
            auth.createUserWithEmailAndPassword(
                emailRef.current.value, passwordRef.current.value
            )
                .then((authUser) => {
                    console.log(authUser);
                }).catch((error) => {
                    alert(error.message);
                });
        }else{alert('password and Confirm Password Not Equal')}



    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value, passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            }).catch((error) => {
                alert(error.message);
            });
    }






    return (
        <div className="signupScreen">
            {!isRegitered ?( <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" defaultValue={email}  />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to MyFlix?  </span>
                    <span className="signupScreen__link" onClick={() => setIsRegistered(true)}> Sign Up Now.</span>
                </h4>
            </form>)
                :
                (<form><h1>Sign Up</h1>
                    <input ref={emailRef} placeholder="Email" type="email" defaultValue={email} />
                    <input ref={passwordRef} placeholder="Password" type="password" />
                    <input ref={confirmPasswordRef} placeholder="Confirm Password" type="password" />
                    <button type="submit" onClick={register}>Sign Up</button>
                    <h4>
                        <span className="signupScreen__gray">Already MyFlix User?  </span>
                        <span className="signupScreen__link" onClick={() => setIsRegistered(false)}> Sign In Now.</span>
                    </h4>
                </form>)



            }



        </div>
    )
}

export default SignUpScreen
