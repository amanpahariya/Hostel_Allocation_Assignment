import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import firebase from "firebase";

function Booked(props) {
    const [hostel, setHostel] = useState(null);
    const [room, setRoom] = useState(null);

    const history = useHistory();

    useEffect(async () => {
        await firebase.auth().onAuthStateChanged(user => {
            if (user === null) {
                history.push("/login")
            }
        })

    }, [])

    useEffect(() => {
        if (window.localStorage.getItem("hostel")) {
            setHostel(window.localStorage.getItem("hostel"))
        } else {
            history.push("/choose-hostel");
        }
        if (window.localStorage.getItem("room")) {
            setRoom(window.localStorage.getItem("room"))
        } else {
            history.push("/choose-room");
        }
    }, [])


    if (hostel === null && room === null) {
        return <>
        </>
    }

    return (
        <div className={"card p-3 d-flex"}
             style={{width: "25rem", flexDirection: "row", background: "rgb(226,228,248)", borderRadius: 20}}>
            <div>
                <p
                    className={"bg-danger text-white p-0 m-0 d-flex justify-content-center align-items-center"}
                    style={{fontSize: 30, minWidth: 30, height: 30, borderRadius: "50% 50%"}}
                >
                    &times;</p>
            </div>
            <div
                className={"w-100"}
            >
                <div
                    className={"text-center"}
                >
                    <h3 className={"mb-3"} style={{fontSize: 22}}>Success</h3>
                    <p className={"mt-5 p-3"} style={{fontSize: 18}}>Your room is has been booked successfully</p>
                </div>
                <div>
                    <p className={"mb-3"} style={{fontSize: 16}}>Your room details are as follows:</p>
                    <div>
                        <ul className={"list-unstyled"}>
                            <li style={{fontSize: 16}}>Hostel No. <span className={"text-danger"}>{hostel}</span></li>
                            <li style={{fontSize: 16}}>Room No.<span className={"text-danger"}> {room}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booked;