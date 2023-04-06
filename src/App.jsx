import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonData } from "./redux/actions";
import { CardPokemon } from "./components/CardPokemon";
import { Header } from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemonData);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        const pokemonList = data.results;
        const promises = pokemonList.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        Promise.all(promises).then((pokemonData) => {
          const pokemonDataWithElement = pokemonData.map((pokemon) => {
            const height = pokemon.height;
            let formattedHeight;
            if (height < 10) {
              formattedHeight = `0.${height}`;
            } else {
              formattedHeight = `${height / 10}.0`;
            }
            return {
              name: pokemon.name,
              element: pokemon.types.map((type) => type.type.name),
              id: pokemon.id,
              abilities: pokemon.abilities.map(
                (ability) => ability.ability.name
              ),
              moves: pokemon.moves.map((move) => move.move.name),
              stats: pokemon.stats.map((stat) => ({
                name: stat.stat.name,
                baseValue: stat.base_stat,
                effectiveValue: stat.effort,
              })),
              weight: pokemon.weight,
              height: formattedHeight,
            };
          });
          dispatch(setPokemonData(pokemonDataWithElement));
        });
      });
  }, [dispatch]);

  function handleSearch(searchTerm) {
    const results = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = searchResults.length
    ? searchResults.slice(indexOfFirstItem, indexOfLastItem)
    : Array.isArray(pokemonData)
    ? pokemonData.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {Array.isArray(searchResults) && searchResults.length > 0 ? (
        <div className="w-full flex flex-wrap gap-5 justify-center p-5">
          {searchResults.map((pokemon) => (
            <div key={pokemon.id}>
              <CardPokemon pokemon={pokemon} index={pokemon.id} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {Array.isArray(pokemonData) && (
            <div className="w-full flex flex-wrap gap-5 justify-center p-5">
              {currentItems.map((pokemon) => (
                <div key={pokemon.id}>
                  <CardPokemon pokemon={pokemon} index={pokemon.id} />
                </div>
              ))}
            </div>
          )}
          {Array.isArray(pokemonData) && pokemonData.length > itemsPerPage && (
            <div className="flex justify-center py-5">
              <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={pokemonData.length}
                onPageChange={handlePageClick}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
