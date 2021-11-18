import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const app = initializeApp(firebaseConfig);
const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoggle = () => {



        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {


                const user = result.user;
                // console.log(user)
                setLoggedInUser({
                    name: user.displayName,
                    email: user.email
                })
                sessionStorage.setItem("name", user.displayName);
                sessionStorage.setItem("pic", user.photoURL)

            }).catch((error) => {
                console.log(error)
            });

    }
    return (
        <div className="mt-5 pt-5">
            <button className="btn btn-warning" onClick={handleGoggle}>Goggle Sign Up</button>
        </div>
    );
};

export default LogIn;