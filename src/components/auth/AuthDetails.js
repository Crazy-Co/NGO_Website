import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from '../../firebase'
import { Link } from "react-router-dom";
import RedirectPage from './RedirectPage'


export default function AuthDetails(props) {
    const [authUser, setAuthUser] = React.useState(null)

    React.useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            }
            else {
                setAuthUser(null)
            }
        })

        return () => {
            listen()
        }
    }, [])

    function signedOut() {
        signOut(auth)
            .then(() => console.log("Sign Out Successful"))
            .catch(error => console.log(error))
    }

    // function redirectPage () {

    // const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate()
    //     }, 3000)
    // }, [])
    // }

    if (props.sign == 'out') {
        signedOut()
    }
    return (
        <div>
            {authUser ?
                <>
                    {/* {redirectPage} */}
                    <h3>Signed In</h3>
                    <button onClick={signedOut}>Sign out</button>
                    <RedirectPage />
                </> :
                <h3>Signed Out</h3>
            }
        </div>
    )
}