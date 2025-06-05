"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";

const MovieContainer = ({id}) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=39bb1da39aea2fc87a20cffece846d80`);
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
      className="min-h-screen bg-cover bg-center text-white p-10"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-90 bg-white/20 p-6 mt-20 rounded-xl shadow-lg backdrop-blur text-black">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="italic text-sm mb-2">Lanzamiento: {data.release_date}</p>
        <p className="text-lg">{data.overview}</p>
      </div>
    </div>
      )}

      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  )
}

export default MovieContainer