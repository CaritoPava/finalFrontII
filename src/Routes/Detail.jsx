import React, { useContext, useEffect, useState } from 'react'
// Libraries
import { useParams } from 'react-router';
// Api
import { ContextGlobal } from '../Components/utils/global.context';
import { getDestinstDetail } from '../Components/services/getDestinstDetail';
// theme
import theme from '../theme';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dataDentist, setDataDentist] = useState({})
  const { state } = useContext(ContextGlobal);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();

  useEffect(() => {
    apiGetdetailDentist()
  }, [])

  const apiGetdetailDentist = async () => {
    try {
      const dentistDetail = await getDestinstDetail(id);
      setDataDentist(dentistDetail)
    } catch (error) {
      console.error('Failed to fetch and set dentist detail', error);
    }
  }

  return (
    <main className='main' style={theme[state.theme]}>
      <h1>Detail Dentist {id}</h1>
      {JSON.stringify(dataDentist) !== '{}' &&
        <table>
          <tr>
            <th>Name</th> <th>Email</th> <th>Phone</th> <th>website</th>
          </tr>
          <tr>
            <td>{dataDentist.name}</td> <td>{dataDentist.email}</td> <td>{dataDentist.phone}</td> <td>{dataDentist.website}</td>
          </tr>
        </table>
      }
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </main>
  )
}

export default Detail