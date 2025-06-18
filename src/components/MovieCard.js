import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ id, title, image, onMouseOver }) => {
  return (
    <div onMouseOver={onMouseOver} className="cursor-pointer hover:scale-105 transition w-40 flex flex-col items-center text-center rounded-xl">
      <Link href={`/movie/${id}`}>
        <Image
          className="rounded-xl"
          src={`https://image.tmdb.org/t/p/original/${image}`}
          width={170}
          height={150}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
