import './register.scss'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("")


    const emailRef = useRef();
    const passwordRef = useRef()

    // method to handle click button
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div className="register">
            <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""/>
               <Link to="login"><button className="login-btn">Login</button></Link>
            </div>
            </div>
            <div className="container">
                <h1>Movies, Reality Shows, Events and more..</h1>
                <h2>Available anywhere.</h2>
                <p>Enter your email to get more in the world of entertainment....</p>
                {!email ? (
                <div className="input">
                    <input type="email" placeholder="Your Email" ref={emailRef}/>
                    <button className="register-btn" onClick={handleStart}>Get Started</button>
                </div>
                ) : (
                  <form className="input">
                    <input type="password" placeholder="Your Password" ref={passwordRef}/>
                    <button className="register-btn" onClick={handleFinish}> Let's Ride!!</button>
                  </form>
                )}
            </div>
        </div>
    )
}

export default Register
