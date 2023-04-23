import { createUserWithEmailAndPassword } from "firebase/auth"
import React, {useState} from "react"
import {auth} from '../../firebase'
import { Link } from 'react-router-dom'
import styles from './login.css'



export default function Register (props) {
    const [isEmail, setEmail] = useState('')
    const [isPassword, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, isEmail, isPassword)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            alert(error);
        });
    }

    return (
        <div className="login-box">
            <h3>Registration</h3>
            <form onSubmit={handleSubmit}>
                <label for = "email">Email ID</label>
                <input
                    type= 'email'
                    name="email"
                    value={isEmail}
                    onChange ={(e) => setEmail(e.target.value)}
                />

                <label for = "password">Password</label>
                <input
                    type= 'password'
                    name="password"
                    value={isPassword}
                    onChange ={(e) => setPassword(e.target.value)}
                />

                <input 
                    type= 'submit'
                />

                {/* <button
                    onClick={() => props.onFormSwitched = 'login'}
                >
                    Already have an account? Login here
                </button> */}
                <Link to="../signin">Alredy have an account? Register</Link>

            </form>
        </div>
    )
} 