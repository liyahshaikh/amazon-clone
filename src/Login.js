import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import {auth} from './firebase'
function Login() {
    const history= useHistory();
    const[email, setEmail] =useState('');
    const[password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault(); //Prevents the page from refreshing :)
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
            if (auth){
            history.push("/")
        }})
        .catch(error => alert(error.message))

    }
    const register = e =>{
        e.preventDefault(); //same
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth)
        })
        .catch(error => alert(error.message));
        if (auth){
            history.push('/')
        }


    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email or mobile phone number</h5>
                    <input type="text" value={email} onChange={
                        e => setEmail(e.target.value)
                    }required/>
                    <h5>Password</h5>
                    <input type="password"value={password} onChange={
                        e => setPassword(e.target.value)
                    }required/>

                    <button type="submit" onClick={signIn}
                     className="login__signInButton">Sign in</button>

                </form>
                <p>
                By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a>
                </p>
                <p className="login__newToAmazon"><span>New to Amazon?</span></p>
                <button onClick={register}
                className="login__createAccountButton">Create your Amazon account</button>

            </div>
        </div>

    )
}

export default Login
