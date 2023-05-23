import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { NavLink } from 'react-router-dom'
import styles from './login.css'



export default function Login(props) {
    const [isEmail, setEmail] = useState('')
    const [isPassword, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, isEmail, isPassword)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                alert(error);
            });
    }
    return (
        <div className='login-box'>
            <form onSubmit={handleSubmit}>
                <h3>Login Page</h3>
                <div>

                <label for="email">Email ID</label>
                <input
                    type='email'
                    name="email"
                    value={isEmail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div>
                <label for="password">Password</label>
                <input
                    type='password'
                    name="password"
                    value={isPassword}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <input
                    type='submit'
                />

                <NavLink to="../signup">Don't have an account? Register</NavLink>
            </form>
                
        </div>
    )
}