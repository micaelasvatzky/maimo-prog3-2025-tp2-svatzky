'use client'
import { useAppContext } from "@/app/contexts/AppContext";
import MovieCard from "@/components/MovieCard";

const FavoritesContainer = () => {
    const {favorites} = useAppContext();

  return (
    <section className="m-5 bg-white/20 rounded-xl shadow-lg backdrop-blur">
     <div className="grid grid-cols-7 grid-rows-2 gap-12 p-6 pr-12">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.image}
          />
        ))}
      </div>
      </section>
  )
}

export default FavoritesContainer