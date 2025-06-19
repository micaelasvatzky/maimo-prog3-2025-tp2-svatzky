import MovieCard from "@/components/MovieCard"

const CardScroll = ({movies}) => {
  return (
      <div
        className="
          flex gap-4 overflow-x-auto overflow-y-hidden p-5 mt-3 mb-5 scroll-smooth
          bg-white/25 rounded-xl shadow-lg backdrop-blur 
        
        "
      >
        {movies.map((movie) => (
          <MovieCard  
          key={movie.id}   
          movie={movie}
          id={movie.id}
          title={movie.title}
          image={movie.poster_path}
        /> 
        ))}
      </div>

  )
}

export default CardScroll