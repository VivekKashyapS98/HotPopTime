import MovieCard from "./MovieCard";

export default function MovieList({ list, genre }) {
  console.log(list);
  return (
    <div className="flex flex-row flex-nowrap overflow-auto">
      {list.map((movie, ind) => (
        <MovieCard key={`${ind}${movie?.title}`} movie={movie} />
      ))}
      <div className="group flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 m-10 transition duration-300 text-white group-hover:w-12 group-hover:h-12"
          viewBox="0 0 20 20 "
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
