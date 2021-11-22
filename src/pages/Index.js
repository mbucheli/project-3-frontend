import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function Index(props) {
    const [form, setForm] = useState({
        medicine: "",
        details: "",
        quantity: Number
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPrescription(form);
        setForm({
            medicine: "",
            details: "",
            quantity: Number,
        });
    };

    const loaded = () => {
        return props.prescription.map((medicine) => (
            <div className="collection" className="col s12 m2" style={{ fontFamily: "Cambria"}}>
                <li key={medicine._id} className="collection-item" style={{ listStyle: "none" }}>
                    <div className="z-depth-5" style={{ paddingLeft: "10px", paddingRight: "5px", paddingTop: "5px", marginBottom: "30px"}}>
                        <h5>{medicine.medicine}</h5>
                        <Link to={`/${medicine._id}`} className="secondary-content" style={{ color: "teal"}}><i className="material-icons prefix">add_circle</i></Link>
                        <p>{medicine.details}</p>
                        <div style={{ paddingBottom: "10px" }}>{moment(medicine.date).format('MM/DD/YYYY')}</div>
                    </div>
                </li>
            </div>
        ));
    };

    const loading = () => {
        <div>
            <h3>Loading...</h3>
        </div>
    };

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit} style={{marginBottom: "40px"}}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">local_pharmacy</i>
                            <input id="icon_title" type="text" className="validate" value={form.medicine} name="medicine" onChange={handleChange} />
                            <label for="icon_title">Medication</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">description</i>
                            <input id="icon_description" type="text" className="validate" value={form.details} name="details" onChange={handleChange} />
                            <label for="icon_description">Details</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <input id="icon_mode_edit" type="number" className="validate" value={form.quantity} name="quantity" onChange={handleChange} />
                            <label for="icon_mode_edit">Quantity</label>
                        </div>
                    </div>
                    <div className="row right-align" style={{ marginTop: "-80px", marginRight: "25px"}}>
                        <button className="btn-floating btn-medium waves-effect waves-light teal" type="submit" name="action"><i class="material-icons right">add_to_photos</i></button>
                    </div>
                </form>
                {props.prescription ? loaded() : loading()}
            </div>
        </div>
    );
}


export default Index;