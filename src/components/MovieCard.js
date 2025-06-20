import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext.js";
import StarButton from "./StarButton";

const MovieCard = ({ id, title, image, onMouseOver }) => {
  const { isFavorite, handleChangeFavorite } = useAppContext();
  const favedMovie = isFavorite(id);

  return (
    <div
      onMouseOver={onMouseOver}
      className="relative min-w-40 flex-shrink-0 flex flex-col items-center text-center rounded-xl"
    >
      <Link href={`/movie/${id}`}>
        <Image
          className="cursor-pointer hover:scale-105 transition block rounded-xl overflow-hidden"
          src={`https://image.tmdb.org/t/p/original/${image}`}
          width={170}
          height={150}
          alt={title}
        />
      </Link>

      <div className="absolute top-2 right-2 bg-white backdrop-blur px-1.5 py-1.5 rounded-full flex items-center justify-center w-8.5 h-8.5">
        <StarButton id={id} title={title} image={image}/>
      </div>
    </div>
  );
};

export default MovieCard;
