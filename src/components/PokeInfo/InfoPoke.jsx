export function InfoPoke({ pokemon }) {
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

  return (
    <div className="w-[49%] h-[49%] flex items-end">
      <div className="bg-blue-500 rounded-xl p-4 w-full h-[80%] flex justify-between">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="font-semibold text-white">Height</h2>
            <p className="text-lg">{pokemon.height} m</p>
          </div>
          <div>
            <h2 className="font-semibold text-white">Weight</h2>
            <p className="text-lg">{pokemon.weight} Kg</p>
          </div>
          <div>
            <h2 className="font-semibold text-white">Type</h2>
            <div className="text-lg flex items-center justify-center gap-2">
              {pokemon.element.map((el) => {
                return (
                  <div
                    className={`${getBackgroundColorForType(
                      el
                    )} text-white rounded-md text-center w-16 h-7`}
                  >
                    {el}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-white">Abilities</h2>
          {pokemon.abilities.map((ab) => {
            return (
              <div>
                <p className="text-lg">{ab}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
