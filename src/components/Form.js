import React from "react";
import Login from "./Login";
import Register from "./Register";


function Form(props) {
    return <div>
            {props.userIsRegistered ? <Login/> :<Register /> }
    </div>;

}

export default Form;