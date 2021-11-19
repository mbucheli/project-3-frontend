import { useState } from "react";
import Show from "./Show";

function Index(props) {
    const [form, setForm] = useState({
        medicine: "",
        details: ""
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPrescription(form);
        setForm({
            medicine: "",
            details: ""
        });
    };
    

    const loaded = () => {
        return props.prescription.map((medicine) => (
            <div className="collection">
                <li key={medicine._id} className="collection-item" style={{listStyle: "none"}}>
                    <div>
                        <h5>{medicine.medicine}</h5>
                        <p>{medicine.details}<button className="secondary-content">
                            <i className="material-icons">delete_forever</i>
                        </button>
                        </p>
                    </div>
                </li>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">local_pharmacy</i>
                            <input id="icon_title" type="text" className="validate" value={form.medicine} name="medicine" onChange={handleChange}/>
                            <label for="icon_title">Medication</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <input id="icon_mode_edit" type="text" className="validate" value={form.details} name="details" onChange={handleChange}/>
                            <label for="icon_mode_edit">Details</label>
                        </div>
                    </div>
                    <div className="row right-align">
                        <button className="btn-floating btn-large waves-effect waves-light blue"><i class="small material-icons">add</i></button>
                    </div>
                </form>
                {props.prescription ? loaded() : loading()}
            </div>
        </div>
    );
}


export default Index;