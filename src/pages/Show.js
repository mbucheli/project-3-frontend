function Show(props) {
    const id = props.match.params.id
    const prescription = props.prescription
    const medicine = prescription.find(m => m._id === id)

    const deleteMedicine = () => {
        props.deletePrescription(medicine._id);
        props.history.push("/");
    };
};

export default Show;