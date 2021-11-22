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
                        <div style={{ paddingBottom: "10px" }}>{moment(medicine.date).format('MM/DD/YYYY')}</div>
                        <span className="card-title">{medicine.medicine}</span>
                        <p>{medicine.details}</p>
                        <p style={{ fontSize: "15px" }}>Quantity: {medicine.quantity}</p>
                        </div>
                    <div className="card-action">
                        <a href="#" onClick={deleteMedicine} className="right align"><i className="material-icons prefix">delete_forever</i></a>
                    </div>
                    <div className="input-field col s6">
                    {/* <i className="material-icons prefix">mode_edit</i> */}
                    <form handleSubmit={handleSubmit}>
                    <input id="icon_mode_edit" type="number" className="validate" value={editQuantity.quantity} name="quantity" onChange={handleChange} />
                    <input id="inputBtn" type="submit" value="Update Info" />
                    </form>
                </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
};

export default Show;