import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import moment from "moment";

function Show(props) {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const prescription = props.prescription
    const medicine = prescription.find(m => m._id === id)

    const [editQuantity, setEditQuantity] = useState(medicine);

    const handleChange = event => {
        setEditQuantity({ ...editQuantity, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.updateQuantity(editQuantity, medicine._id);
        navigate("/");
    };

    const deleteMedicine = () => {
        props.deletePrescription(medicine._id);
        navigate("/");
    };

    return (
        <div className="row" style={{ marginTop: "30px", fontFamily: "Cambria" }}>
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <div style={{ marginTop: "-10px", paddingBottom: "20px", textAlign: "right" }}>{moment(medicine.date).format('MM/DD/YYYY')}</div>
                        <span className="card-title">{medicine.medicine}</span>
                        <p>{medicine.details}</p>
                        <p style={{ fontSize: "15px" }}>Quantity: {medicine.quantity}</p>
                    </div>
                    <div className="card-action" style={{ height: "80px"}}>
                        <div className="input-field col s6" style={{color: "white"}}>
                            <i className="material-icons prefix" style={{ marginLeft: "-30px"}}>mode_edit</i>
                            <form handleSubmit={handleSubmit} style={{marginTop: "-30px"}}>
                                <input id="icon_mode_edit" style={{color: "white"}} type="number" className="validate" value={editQuantity.quantity} name="quantity" onChange={handleChange} />
                                <button style={{ border: "none" }}><input id="inputBtn" style={{ border: "none" }} type="submit" /></button>
                            </form>
                        </div>
                        <a href="#" onClick={deleteMedicine} className="right align" style={{ marginRight: "0px"}}><i className="material-icons prefix">delete_forever</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Show;