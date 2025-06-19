import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext.js";

const MovieCard = ({ id, title, image, onMouseOver }) => {
  const { isFavorite, handleChangeFavorite } = useAppContext();
   const favedMovie = isFavorite(id);

  return (
    <div onMouseOver={onMouseOver} className="relative min-w-40 flex-shrink-0 flex flex-col items-center text-center rounded-xl">
      <Link href={`/movie/${id}`}>
        <Image
          className="cursor-pointer hover:scale-105 transition block rounded-xl overflow-hidden"
          src={`https://image.tmdb.org/t/p/original/${image}`}
          width={170}
          height={150}
          alt={title}
        />
      </Link>

      <button
        onClick={() => handleChangeFavorite(title, image, id)}
        className="absolute top-2 right-2 bg-white backdrop-blur p-1 rounded-full"
      >
        {favedMovie ? (
          <Image src="/assets/star.png" alt="Favorito" width={24} height={24} />
        ) : (
          <Image src="/assets/starEmpty.png" alt="No favorito" width={24} height={24} />
        )}
      </button>
    </div>
  );
};

export default MovieCard;
