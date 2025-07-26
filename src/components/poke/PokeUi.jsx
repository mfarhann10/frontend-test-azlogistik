import SpinnerMini from "../ui/SpinnerMini";

function PokeUi({ poke, isLoading }) {
  if (isLoading) {
    return <SpinnerMini />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-4">
      {poke.map((p, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-xl p-4 border border-gray-200 dark:border-gray-700 mb-5"
        >
          <h2 className="text-lg font-semibold capitalize text-gray-900">
            {p.name}
          </h2>
          <a
            href={p.url}
            target="_blank"
            className="text-sm text-blue-500 cursor-pointer"
          >
            {p.url}
          </a>
        </div>
      ))}
    </div>
  );
}

export default PokeUi;
