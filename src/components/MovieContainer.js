"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";
import Navbar from "./Navbar";
import { useAppContext } from "@/app/contexts/AppContext.js";
import StarButton from "./StarButton";

const MovieContainer = ({ id }) => {
  const { isFavorite, handleChangeFavorite } = useAppContext();
  const IMAGE_BASE = "https://image.tmdb.org/t/p/original/";
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=39bb1da39aea2fc87a20cffece846d80`
        );
        const responseData = response.data;
        console.log(responseData);
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    getData();
  }, [id]);

  const favedMovie = isFavorite(data.id);

  return (
    <div>
      {!loading && !error && (
        <div
          className="min-h-screen lg:h-140 md:h-120 bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${IMAGE_BASE}/${data.backdrop_path})`,
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundBlendMode: "overlay",
          }}
        >
          <Navbar />
          <div className="w-full flex justify-center">
            <div className="relative flex flex-col md:flex-row w-85 mb-10 md:mb-0 justify-center items-center md:items-start md:justify-start lg:w-220 md:w-200 lg:h-100 md:h-80 p-6 bg-white/40 lg:mt-40 mt-30 rounded-xl shadow-lg backdrop-blur text-black">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                className="w-80 md:w-45 lg:w-60 rounded-lg shadow-md"
                width={200}
                height={200}
              />
              <div className="md:ml-5 w-70 md:w-150  mt-5 md:mt-0 md:max-w-xl">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-4xl font-bold">{data.title}</h1>
                  <div>
                  <StarButton
                    title={data.title}
                    image={data.poster_path}
                    id={data.id}
                  />
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-center gap-4 mb-2 md:flex-row">
                  <p className="italic text-lg md:text-md font-bold">
                    Release date: {data.release_date}
                  </p>
                  <p className="text-yellow-200 font-semibold text-lg md:text-md">
                    ⭐ {data.vote_average.toFixed(1)} / 10
                  </p>
                </div>
                <p className="text-2xl md:text-lg">{data.overview}</p>
              </div>
            </div>
          </div>
          <div className="absolute hidden lg:block lg:bottom-4 lg:right-4 w-15 h-15 md:hidden animate-bounce">
            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              target="_blank"
            >
              <Image
                src="/assets/Clapper.gif"
                alt="Claqueta"
                width={100}
                height={100}
                unoptimized
              />
            </Link>
          </div>
        </div>
      )}

      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  );
};

export default MovieContainer;
