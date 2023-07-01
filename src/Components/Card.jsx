import React, { useContext, useState } from "react";
// Libraries
import { Link } from "react-router-dom";
import theme from "../theme";
// Utils
import { ACTIONS } from "./utils/actions";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, foundFavs }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = (event) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    event.preventDefault()
    if (!foundFavs) {
      const dentistFav = {
        name, username, id
      }
      dispatch({ type: ACTIONS.ADD_DENTIST, payload: { dentistFav } });
      alert('Dentist added successfully')
    }
  }

  return (
    <Link className='card' style={theme[state.theme]} to={`/destist/${id}`}>
      <img src="./images/doctor.jpg" alt="Doctor" />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>ID: {id}</p>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        className="favButton"
        onClick={(e) => addFav(e)}
        style={state.theme === 'light' ? theme.dark : theme.light}
      >
        {foundFavs ? '⭐' : 'Add fav'}
      </button>
    </Link>
  );
};

export default Card;
