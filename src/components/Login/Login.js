import React, {useEffect, useState} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase";
import {useHistory} from "react-router-dom";


const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};

function Login() {

    const [isSigned, setIsSigned] = useState(false);
    let history = useHistory();

    useEffect(async () => {
        await firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsSigned(true);
                if (window.location.pathname === "/login") {
                    history.push("/");
                }
            }
        })
    }, [])
    return (
        <div className="">
            <div className="text-center">
                <h4>Hostel Allocation</h4>
                <p>Please sign-in:</p>
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    );
}

export default Login;