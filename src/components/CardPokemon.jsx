import { useState } from "react";
import Lines from "../assets/lines.svg";
import Modal from "./Moda";
import { StatsPoke } from "./PokeInfo/StatsPoke";
import { InfoPoke } from "./PokeInfo/InfoPoke";
import { MovesPoke } from "./PokeInfo/MovesPoke";

export function CardPokemon({ pokemon, index }) {
  const [isOpen, setIsOpen] = useState(false);

  function getBackgroundColorForType(type) {
    switch (type) {
      case "fire":
        return "bg-red-600";
      case "water":
        return "bg-blue-500";
      case "grass":
        return "bg-green-500";
      case "bug":
        return "bg-green-500";
      case "poison":
        return "bg-purple-500";
      case "rock":
        return "bg-yellow-700";
      case "ground":
        return "bg-gradient-to-b from-yellow-300 to-yellow-600 text-black";
      case "electric":
        return "bg-yellow-300 text-black";
      case "steel":
        return "bg-gradient-to-r from-zinc-100 to-zinc-500 text-black";
      case "psychic":
        return "bg-pink-500";
      case "fighting":
        return "bg-orange-500";
      case "fairy":
        return "bg-pink-300 text-black";
      case "normal":
        return "bg-zinc-500";
      case "ghost":
        return "bg-purple-800";
      case "dark":
        return "bg-black text-white";
      case "ice":
        return "bg-gradient-to-r from-blue-200 to-blue-100 text-black";
      case "dragon":
        return "bg-gradient-to-b from-blue-600 to-orange-500";
      case "flying":
        return "bg-gradient-to-b from-blue-600 to-white text-black";
    }
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  <div className="w-[40%] h-[40%] bg-zinc-400"></div>;

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal} title={pokemon.name}>
        <h1 className="w-full text-center font-bold text-2xl">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Nº
          {pokemon.id}
        </h1>
        <div className="w-full h-[95%] flex flex-wrap justify-center items-center gap-3 overflow-y-scroll scrollbar">
          <div className="w-[49%] h-[49%] flex items-center justify-center rounded-xl">
            <img
              className="w-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt=""
            />
          </div>
          <InfoPoke pokemon={pokemon} />
          <StatsPoke pokemon={pokemon} />
          <MovesPoke pokemon={pokemon} />
        </div>
      </Modal>

      <div
        className="bg-bgCard cursor-pointer w-[260px] h-[260px] py-1 flex flex-col items-center gap-1 relative transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full text-center text-xl font-bold">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </div>
        <div className="w-[230px] h-[160px] bg-black rounded flex items-center justify-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt="pokemonImg"
            className="w-[90%]"
          />
        </div>
        <div className="w-full flex h-6 px-4 gap-1">
          {pokemon.element.map((el) => {
            return (
              <div
                className={`${getBackgroundColorForType(
                  el
                )} text-white rounded-md text-center w-16`}
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between w-full px-7 h-5">
          <div className="w-5 h-5 rounded-full bg-red-600" />
          <img src={Lines} alt="" />
        </div>
        <p className="absolute right-0 text-sm pr-1">Nº {index}</p>
      </div>
    </>
  );
}
