import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./login.css";

export default function RedirectPage () {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/NGO_Website/signedIn', { replace: true })
        }, 1000)
    }, [])

    return (
        <p id="redirect_msg">
        Redirecting to home page...
        </p>
    )
}