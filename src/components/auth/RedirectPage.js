import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RedirectPage () {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/NGO_Website/signedIn', { replace: true })
        }, 3000)
    }, [])

    return (
        <h3>Redirecting to home page...</h3>
    )
}