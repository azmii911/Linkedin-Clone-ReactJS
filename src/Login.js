import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'
function Login() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [url, seturl] = useState('');
    const [pass, setpass] = useState('');    
    const dispatch = useDispatch()

    const LoginHandler = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pass).then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL: userAuth.user.photoURL,
            }))
        }).catch((err)=>alert(err))
    }

    //Register Handler 
    const registerHandler = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,pass).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:url
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.id,
                    displayName:name,
                    photoURL:url
                }))
            })
        }).catch((err) => alert(err))

    }
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="login__form">
                <form>
                <input type="text" placeholder="Full Name" value={name} onChange={e=> setname(e.target.value)}/>
                <input type="email" placeholder="Email Address"  value={email} onChange={e=> setemail(e.target.value)}/>
                <input type="text" placeholder="Profile Pic URL" value={url} onChange={e=> seturl(e.target.value)}/>
                <input type="password" placeholder="Password" value={pass} onChange={e=> setpass(e.target.value)}/>
                <button type="submit" onClick={LoginHandler}>Login</button>
                <p>Don't have an account?</p>
                <span onClick={registerHandler}>Create my account</span>
                </form>
            </div>
        </div>
    )
}

export default Login
