import React, { useContext } from 'react'
// Components
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
// Theme
import theme from '../theme';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContext(ContextGlobal);
  const listDentists = state.dentists || []

  return (
    <main className='main' style={theme[state.theme]} >
      <h1>Home</h1>
      {listDentists.length !== 0 &&
        <div className='card-grid'>
          {listDentists.map(dentist => {
            const foundFavs = state.favsDentists.find(element => element.id === dentist.id);
            return (
              /* Aqui deberias renderizar las cards */
              <Card
                id={dentist.id}
                key={dentist.id}
                name={dentist.name}
                foundFavs={foundFavs}
                username={dentist.username}
              />
            )
          })}
        </div>
      }
    </main>
  )
}

export default Home