import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import React from 'react';
import AuthDetails from '../components/auth/AuthDetails';
import { Outlet } from "react-router-dom"


export default function LoginOrRegisterPage() {
    const [isCurrentForm, setCurrentForm] = React.useState(true)

    function toggleForm(formName) {
        setCurrentForm(formName)
    }
    return (
        <>
            {/* <Routes>

            <Route exact path="NGO_Website/joinus/signin" element={<Login />} />
            <Route exact path="NGO_Website/joinus/signup" element={<Register />} />
        </Routes> */}
            <Outlet />
            <AuthDetails />

        </>
    )
}