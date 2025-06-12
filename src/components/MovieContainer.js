"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";
import Navbar from "./Navbar";

const MovieContainer = ({ id }) => {
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

  return (
    <div>
      {!loading && !error && (
        <div
          className="h-screen bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${IMAGE_BASE}/${data.backdrop_path})`,
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundBlendMode: "overlay",
          }}
        >
          <Navbar />
          <div className="w-full flex justify-center">
            <div className=" relative flex justify-start w-200 max-h-100 p-6 bg-white/40 mt-20 rounded-xl shadow-lg backdrop-blur text-black">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                className="w-60 rounded-lg shadow-md"
                width={200}
                height={200}
              />
              <div className="ml-5 max-w-xl">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-4xl font-bold">{data.title}</h1>
                  <p className="text-yellow-100 font-semibold text-lg ml-4">
                    ⭐ {data.vote_average.toFixed(1)} / 10
                  </p>
                </div>
                <p className="italic text-sm mb-2 font-bold">
                  Release date: {data.release_date}
                </p>
                <p className="text-lg">{data.overview}</p>
              </div>
              <div className="absolute bottom-4 right-4 w-18 h-18 animate-bounce">
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
          </div>
        </div>
      )}

      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  );
};

export default MovieContainer;
