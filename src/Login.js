import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState("");
    const [userImage, setUserImage] = useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                auth.user.updateProfile({
                    displayName: username,
                    photoURL: userImage,
                })
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
           

            <div className='login__container'>
                <img className="login__image" src="logowithborder.png"/>
                <h1>Sign-in </h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                    <hr/>
                    <h5>Avatar URL</h5>
                    <input type="text" value={userImage} onChange={(e) => setUserImage(e.target.value)}/>
                    <h5>Username</h5>
                    <input
                   
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
              />
                </form>

                <p>Or create a new Sphere account with the above info. <hr/> By creating a new account you agree to the Sphere TOS and your account can be terminated any time! <hr/>We recomend you can create an account with a fake email, such as blah@test.com or bob@test.com <hr/> This is a test app, please do not use any security sensitive account details on here.</p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login