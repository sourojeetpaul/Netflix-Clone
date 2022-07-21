import React, {useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

    const [signIn, setSignIn] = useState(false)



    return (
        <div className="loginScreen">
            <div className="logindScreen_background">
                <img className="loginScreen_logo" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"></img>
                <button className="loginScreen_button" onClick={() => setSignIn(true)}>
                    sign In
                </button>

                <div className="loginScreen_gradient">
                </div>

                <div className="loginScreen_body">
                    {signIn ? (
                        <SignUpScreen />
                    ) : <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere, Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                        <div className="loginScreen_input">
                            <form>
                                <input type='email'
                                placeholder='Email Address' />
                                <button className="loginScreen_getStarted" onClick={() => setSignIn(true)}>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                </>
                }
                    
                    
                </div>


        </div>
        </div>
    )
}

export default LoginScreen
