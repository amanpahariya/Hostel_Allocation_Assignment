import React, {Component} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase";


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

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isSigned: false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
        })
    }

    render() {
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
}

export default Login;