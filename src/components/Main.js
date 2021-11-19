import { useEffect, useState } from "react";


function Main() {
    const [prescription, setPrescription] = useState({ medicine: "", details: "" });

    const URL = "https://nurse-mern.herokuapp.com/";

    const getPrescription = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPrescription(data);
    };

    const createPrescription = async (medicine) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(medicine)
        });
        getPrescription();
    };

    useEffect(() => getPrescription(), [])

    const loaded = () => {
        return prescription.map((medicine) => (
            <div class="collection">
                        <li key={medicine._id} classname="collection-item">
                            <div>
                                <h5>{medicine.medicine}</h5>
                                <p>{medicine.details}<a href="#!" className="secondary-content">
                                    <i className="material-icons">delete</i>
                                </a>
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
                <pre>{JSON.stringify(prescription)}</pre>
                <form className="col s12" createPrescription={createPrescription}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">local_pharmacy</i>
                            <input id="icon_title" type="text" className="validate" onChange={error => setPrescription({ ...prescription, medicine: error.target.value })} />
                            <label for="icon_title">Medication</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <input id="icon_mode_edit" type="text" className="validate" onChange={error => setPrescription({ ...prescription, details: error.target.value })} />
                            <label for="icon_mode_edit">Details</label>
                        </div>
                    </div>
                    <div className="row right-align">
                        <button className="waves-effect.waves-light btn">Submit</button>
                    </div>
                </form>
                {prescription ? loaded() : loading()}
            </div>
        </div>
    )
};

export default Main;