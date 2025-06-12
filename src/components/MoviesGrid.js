import MovieCard from "@/components/MovieCard";

const MoviesGrid = ({ movies, handleMovieHover, handleMouseLeave}) => {
  return (
    <section className="bg-white/20 rounded-xl shadow-lg backdrop-blur m-5" onMouseLeave={handleMouseLeave}>
      <div className="grid grid-cols-7 grid-rows-3 gap-12 p-6 pr-12">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            onMouseOver={() => handleMovieHover(movie)}
          />
        ))}
      </div>
    </section>
  );
};

export default MoviesGrid;
