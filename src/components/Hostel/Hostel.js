import React, {useEffect, useState} from 'react';
import firebase from "firebase";
import {useHistory} from "react-router-dom";

function Hostel() {
    let history = useHistory();
    const [hostel, setHostel] = useState(null);
    const [room, setRoom] = useState(null);

    const [user,setUser] = useState();


    useEffect(async () => {
        await firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            if (user === null) {
                history.push("/login")
            }
        })

        if (window.localStorage.getItem("room") && window.localStorage.getItem("hostel")) {
            setHostel(window.localStorage.getItem("hostel"));
            setRoom(window.localStorage.getItem("room"));
        } else {
            history.push("/choose-hostel")
        }
    }, [])


    function signOut() {
        firebase.auth().signOut();
        history.push("/login");
    }

    return (
        <div>
            <div className={"card p-3 d-flex border-2"}
                 style={{width: "25rem", flexDirection: "row", borderRadius: 20}}>
                <div
                    className={"w-100"}
                >
                    <div
                        className={"text-center"}
                    >
                        <h3>Welcome {user && user.displayName}</h3>
                    </div>
                    <div>
                        <p>You have already booked a room</p>
                    </div>
                    <div className={"pb-5"}>
                        <p className={"mb-3 fw-bold"} style={{fontSize: 18}}>Your room details are as follows:</p>
                        <div>
                            <ul className={"list-unstyled"}>
                                <li style={{fontSize: 16}}>Hostel No. <span className={"text-danger"}>{hostel}</span></li>
                                <li style={{fontSize: 16}}>Room No.<span className={"text-danger"}> {room}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*<button onClick={() => signOut()}>SIgnout</button>*/}
        </div>
    );
}

export default Hostel;