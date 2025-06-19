import MovieCard from "@/components/MovieCard";

const MoviesGrid = ({ movies, handleMovieHover, handleMouseLeave }) => {
  return (
    <section
      className="bg-white/20 rounded-xl shadow-lg backdrop-blur m-5"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="grid
        grid-cols-2
      md:grid-cols-5
      lg:grid-cols-7
      gap-4
      md:gap-6
      lg:gap-12
      p-4
      md:pr-8
      lg:pr-12"
      >
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
