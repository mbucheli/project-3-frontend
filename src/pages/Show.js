import { useParams, useNavigate } from "react-router";

function Show(props) {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const prescription = props.prescription
    const medicine = prescription.find(m => m._id === id)

    const deleteMedicine = () => {
        props.deletePrescription(medicine._id);
        navigate("/");
    };

    return (
        <div className="row" style={{ marginTop: "30px", fontFamily: "Cambria" }}>
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{medicine.medicine}</span>
                        <p>{medicine.details}</p>
                    </div>
                    <div className="card-action">
                        <a href="#" style={{ fontSize: "20px" }}>Quantity: {medicine.quantity}</a>
                        <a href="#" onClick={deleteMedicine} className="right align"><i className="material-icons prefix">delete_forever</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Show;