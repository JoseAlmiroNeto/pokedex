export function StatsPoke({ pokemon }) {
  return (
    <div className="overflow-y-scroll scrollbar w-full h-[49%] bg-zinc-100 flex flex-col justify-center px-3 gap-3 rounded-xl">
      {pokemon.stats.map((sta) => {
        return (
          <div clas>
            <p>{sta.name}</p>
            <div class="w-[] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${sta.baseValue}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
