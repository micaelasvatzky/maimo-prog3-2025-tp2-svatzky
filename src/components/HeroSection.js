"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MoviesGrid from "@/components/MoviesGrid";

const HeroSection = ({ movies }) => {
  const [featuredMovie, setFeaturedMovie] = useState(movies[0]);
  const IMAGE_BASE = "https://image.tmdb.org/t/p/original/";

  const handleMovieHover = (movie) => {
    setFeaturedMovie(movie);
  };

  const handleMouseLeave = () => {
  setFeaturedMovie(movies[0]);
};

  return (
    <section className="relative w-full">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,1),40%, rgba(0,0,0,0)), linear-gradient(to bottom, rgba(0,0,0,0.15),80%, rgba(0,0,0,1)), url(${IMAGE_BASE}/${featuredMovie.backdrop_path})`,
        }}
        className={`h-full bg-cover bg-no-repeat bg-center md:bg-start w-full pb-10`}
      >
        <Navbar />
        <div className="content h-[500px] flex flex-col justify-center items-start px-[50px] pt-10 md:pt-0">
          <h2 className="text-white text-3xl pb-2 text-center md:text-left">{featuredMovie.title}</h2>
          <p className=" text-white max-w-[500px] text-center md:text-left">{featuredMovie.overview}</p>
        </div>
      </div>
       <div className="relative z-10 -mt-10">
          <MoviesGrid
            movies={movies}
            handleMovieHover={handleMovieHover}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
    </section>
  );
};

export default HeroSection;
