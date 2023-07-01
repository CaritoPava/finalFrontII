import { createContext, useReducer, useEffect, useMemo } from "react";
import { getDentists } from "../services/getDestinsts";
import { ACTIONS } from './actions';

export const initialState = { theme: 'light', favsDentists: [] }

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_DENTISTS:
      return { ...state, dentists: action.payload.dentists };
    case ACTIONS.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case ACTIONS.ADD_DENTIST:
      const updatedDentists = state.favsDentists;
      updatedDentists.push(action.payload.dentistFav);
      localStorage.setItem('favsDentists', JSON.stringify(updatedDentists));
      return { ...state, favsDentists: updatedDentists };
    default:
      return state;
  }
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAndSetDentists = useMemo(() => async () => {
    try {
      const dentists = await getDentists();
      dispatch({ type: ACTIONS.SET_DENTISTS, payload: { dentists } });
    } catch (error) {
      console.error('Failed to fetch and set dentists', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAndSetDentists();
  }, [fetchAndSetDentists]);


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
