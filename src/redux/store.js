import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = {
  pokemonData: {}
};

const store = createStore(rootReducer, initialState);

export default store;
