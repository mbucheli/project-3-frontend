import React from "react";

const Form = () => {
    return (
        <div>
            <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">title</i>
          <input id="icon_title" type="text" className="validate"/>
          <label for="icon_title">Task</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <input id="icon_mode_edit" type="text" className="validate"/>
          <label for="icon_mode_edit">Details</label>
        </div>
      </div>
    </form>
  </div>
        </div>
    )
};

export default Form;