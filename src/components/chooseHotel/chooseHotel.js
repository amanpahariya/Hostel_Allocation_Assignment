import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function ChooseHotel(props) {

    const [gender, setGender] = useState();
    const [hostel, setHostel] = useState(false);

    const history = useHistory();


    function selectedHostel(e) {
        window.localStorage.setItem("gender", gender);
        window.localStorage.setItem("hostel", e.target.innerHTML);
        history.push("/choose-room");
    }

    return (
        <div>
            {!hostel ?
                <><h2 className={"text-center mb-5"}>Choose your Hostel</h2>
                    <div className={"d-flex flex-wrap justify-content-center"}>
                        <div className="card m-3 border-0 pointer-event"
                             onClick={() => {
                                 setGender("female");
                                 setHostel(true);
                             }}
                             style={{
                                 width: "18rem",
                                 height: "16rem",
                                 borderRadius: 15,
                                 background: "rgb(255,206,241)",
                                 cursor: "pointer"
                             }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                {/*<h5 className="card-title">Card title</h5>*/}
                                <p className="card-text"><strong>Girls Hostels</strong></p>
                            </div>
                        </div>
                        <div className="card m-3 border-0"
                             onClick={() => {
                                 setGender("male");
                                 setHostel(true);
                             }}
                             style={{
                                 width: "18rem",
                                 height: "16rem",
                                 borderRadius: 15,
                                 background: "rgb(219,255,251)",
                                 cursor: "pointer"
                             }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                {/*<h5 className="card-title">Card title</h5>*/}
                                <p className="card-text"><strong>Boys Hostels</strong></p>
                            </div>
                        </div>
                    </div>
                </>
                : <div style={{width: 350}}>
                    <h2 className={"text-center mb-5"} style={{fontSize: 35}}>Choose a Hostel</h2>
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            Array(6).fill(1).map((el, i) => {
                                return (
                                    <button
                                        className="bg-secondary border-0 p-4 text-white fw-bold"
                                        style={{margin: 10, borderRadius: 15, fontSize: 22}}
                                        key={i}
                                        onClick={(e) => selectedHostel(e)}
                                    >
                                        {gender == "male" ? "B" + (i + 1) : "G" + (i + 1)}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default ChooseHotel;