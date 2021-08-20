import firebase from 'firebase';
import {Component} from "react";
import Login from "./components/Login/Login";
import {BrowserRouter, Link, Route} from "react-router-dom";


firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSigned: false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSigned: !!user})
        })

        if (!this.state.isSigned && window.location.pathname !== "/login") {
            window.location.href = "/login";
        }
    }


    render() {
        return (
            <BrowserRouter>
                <switch>
                    <main className="d-flex justify-content-center align-items-center main-container">
                        {
                            this.state.isSigned ?
                                (
                                    <>
                                        <div>Signed in</div>
                                        <button onClick={() => firebase.auth().signOut()}>Sign out</button>
                                    </>
                                )
                                : <Route path="/login" component={Login}/>
                        }
                    </main>
                </switch>
            </BrowserRouter>
        );
    }
}

export default App;
