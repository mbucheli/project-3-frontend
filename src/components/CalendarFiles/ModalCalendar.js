import "./Calendar.css";
import React from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

function ModalCalendar({ closeModalCalendar }) {
    return (
        <div className="modalBackground" className="modalBackgroundCalendar">
            <div className="modalContainer" className="modalContainerCalendar">
                <div className="titleCloseBtnCalendar">
                    <button className="red-text" style={{ border: "none", background: "transparent" }} onClick={() => { closeModalCalendar(false) }}>
                        <i className="material-icons prefix">cancel</i>
                    </button>
                </div>
                <div className="bodyCalendar">
                    <p style={{color: "black"}}><CalendarComponent /></p>
                </div>
            </div>
        </div>
    );
}

export default ModalCalendar;