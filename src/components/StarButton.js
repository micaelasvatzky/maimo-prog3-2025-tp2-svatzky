"use client";

import Image from "next/image";
import { useAppContext } from "@/app/contexts/AppContext.js";

const StarButton = ({title, image, id }) => {
  const { isFavorite, handleChangeFavorite } = useAppContext();

  const favedMovie = isFavorite(id);

  return (
    <button
      onClick={() => {
        handleChangeFavorite(title, image, id);
      }}
      className="transition duration-200 ease-in-out"
    >
      {favedMovie ? (
        <Image
          src="/assets/star.png"
          alt="Favorito"
          width={32}
          height={32}
          className="hover:scale-110"
        />
      ) : (
        <Image
          src="/assets/starEmpty.png"
          alt="No favorito"
          width={32}
          height={32}
          className="hover:scale-110"
        />
      )}
    </button>
  );
};

export default StarButton;
