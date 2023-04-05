const initialState = {
  pokemonData: {}
};

const pokemonDataReducer = (state = initialState.pokemonData, action) => {
  switch (action.type) {
    case 'SET_POKEMON_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default pokemonDataReducer;
