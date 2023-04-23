import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { auth } from '../../firebase'

export default function AuthDetails() {
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
    return (
        <div>
            {authUser ? <><h3>Signed In</h3><button onClick={signedOut}>Sign out</button></> : <h3>Signed Out</h3>}
        </div>
    )
}