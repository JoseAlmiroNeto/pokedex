export function MovesPoke({ pokemon }) {
  return (
    <div className="overflow-y-scroll scrollbar w-full h-[49%] bg-zinc-100 flex flex-col px-3 gap-3 rounded-xl">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl">Moves</h2>
        <div className="flex flex-wrap gap-2">
          {pokemon.moves.map((move) => {
            return <p className="text-lg bg-zinc-200 p-1 rounded">{move}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
