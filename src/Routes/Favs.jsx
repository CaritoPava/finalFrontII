import React, { useContext } from "react";
// Components
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
// Theme
import theme from "../theme";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(ContextGlobal);
  const listDentistsFavs = state.favsDentists || []

  return (
    <main className="main" style={theme[state.theme]}>
      <h1>Dentists Favs</h1>
      {listDentistsFavs.length !== 0 &&
        <div className='card-grid'>
          {listDentistsFavs.map(dentist => {
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
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
    </main>
  );
};

export default Favs;