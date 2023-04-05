import { combineReducers } from 'redux';
import pokemonDataReducer from './reducers';

const rootReducer = combineReducers({
  pokemonData: pokemonDataReducer
});

export default rootReducer;
