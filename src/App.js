import firebase from 'firebase';
import {Component, useEffect, useState,} from "react";
import Login from "./components/Login/Login";
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";

import Hostel from "./components/Hostel/Hostel";
import ChooseHotel from "./components/chooseHotel/chooseHotel";
import ChooseRoom from "./components/chooseRoom/chooseRoom";
import Booked from "./components/booked/booked";


firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});


const App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <main className="d-flex justify-content-center align-items-center main-container">
                    <Route exact path={"/"} component={Hostel}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/choose-hostel"} component={ChooseHotel}/>
                    <Route path={"/choose-room"} component={ChooseRoom}/>
                    <Route path={"/booked"} component={Booked}/>
                </main>
            </Switch>
        </BrowserRouter>
    );
};

export default App;