import React, { useState } from "react";
// Utils
import validateDataUser from "./utils/validationForm";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [showMessage, setShowMessage] = useState(false)
  const [nameToShow, setNameToShow] = useState('')
  const [dataUserForm, setDataUserForm] = useState({
    fullName: '',
    email: ''
  })

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setDataUserForm((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  function sendInfoUser(event) {
    event.preventDefault();
    setShowMessage(validateDataUser(dataUserForm))
    setNameToShow(dataUserForm.fullName)
    setDataUserForm((prevalue) => {
      return {
        ...prevalue,
        fullName: '',
        email: ''
      }
    })
  }

  return (
    <div>
      <form onSubmit={(event) => sendInfoUser(event)}>
        <input onChange={(e) => handleChange(e)} value={dataUserForm.fullName} name="fullName" type="text" placeholder="Full name" />
        <input onChange={(e) => handleChange(e)} value={dataUserForm.email} name="email" placeholder="Email" />
        <input type="submit" value="Send" />
      </form>
      <p style={{height: '20px'}}>
        {showMessage && `Gracias ${nameToShow}, te contactaremos cuanto antes vía mail`}
      </p>
    </div>
  );
};

export default Form;
