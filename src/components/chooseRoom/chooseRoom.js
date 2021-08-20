import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import {useHistory} from "react-router-dom";
import firebase from "firebase";

const options = [
    {value: '1st Floor', label: '1st Floor'},
    {value: '2nd Floor', label: '2nd Floor'},
    {value: '3rd Floor', label: '3rd Floor'},
    {value: '4th Floor', label: '4th Floor'},
    {value: '5th Floor', label: '5th Floor'}
]


function ChooseRoom(props) {
    const [floor, setFloor] = useState("1st Floor");
    const [room, setRoom] = useState(null);

    const history = useHistory();

    useEffect(async () => {
        await firebase.auth().onAuthStateChanged(user => {
            if (user === null) {
                history.push("/login")
            }
        })

    }, [])


    function selectFloor(e) {
        setRoom(null);
        setFloor(e.value);
    }

    function selectRoom(e) {
        setRoom(e.target.innerHTML)
    }


    function confirmBook() {
        window.localStorage.setItem("floor", floor);
        window.localStorage.setItem("room", room);
        history.push("booked")
    }

    return (
        <div>
            <h2 className="mb-2">Choose a Floor</h2>
            <Select
                options={options}
                defaultValue={options[0]}
                isSearchable={false}
                onChange={(e) => selectFloor(e)}
            />
            <div className={"card mt-3 p-3"}>
                <div className={"d-flex justify-content-between"}>
                    <button
                        className={room === "1" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>1
                    </button>
                    <button
                        className={room === "2" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}
                    >2
                    </button>
                    <button
                        className={room === "3" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>3
                    </button>
                    <button
                        className={room === "4" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>4
                    </button>
                </div>
                <div className={"d-flex justify-content-between"}>
                    <button
                        className={room === "10" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>10
                    </button>
                    <button
                        className={room === "5" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>5
                    </button>
                </div>
                <div className={"d-flex justify-content-between"}>
                    <button
                        className={room === "9" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>9
                    </button>
                    <button
                        className={room === "8" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>8
                    </button>
                    <button
                        className={room === "7" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>7
                    </button>
                    <button
                        className={room === "6" ? "border-0 my-2 mx-2 fw-bold bg-secondary" : "border-0 my-2 mx-2 fw-bold"}
                        onClick={(e) => selectRoom(e)}
                        style={{
                            width: 40,
                            height: 50,
                            background: "rgb(151,192,124)",
                            borderRadius: 15,
                            fontSize: 22
                        }}>6
                    </button>
                </div>
            </div>
            {
                floor && room && <div className={"mt-3 d-flex justify-content-center"}>
                    <button
                        onClick={() => confirmBook()}
                        className={"border-0 px-5 py-1 text-white"}
                        style={{background: "rgb(88,158,255)", borderRadius: 20}}
                    >Book Room
                    </button>
                </div>
            }
        </div>
    );
}

export default ChooseRoom;