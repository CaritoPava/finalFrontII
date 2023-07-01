import React, { useContext } from 'react'
// Components
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';
// Theme
import theme from '../theme'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className='main' style={{...theme[state.theme], textAlign: 'center'}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact