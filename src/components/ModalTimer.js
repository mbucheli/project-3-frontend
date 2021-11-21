import React from "react";
import "../App.css";
import Timer from "./Timer";

function ModalTimer({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button className="red-text" onClick={() => { closeModal(false) }}>
                        <i className="material-icons prefix">cancel</i>
                    </button>
                </div>
                <div>
                    <h4 className="title" style={{color: "black"}}><i className="material-icons prefix" style={{ fontSize: "60px"}}>add_alarm</i></h4>
                </div>
                <div className="body">
                    <p style={{color: "black"}}><Timer /></p>
                </div>
            </div>
        </div>
    );
}

export default ModalTimer;