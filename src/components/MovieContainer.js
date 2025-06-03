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
  }, []);

  return (
    <div>
    {loading && <p>Cargando...</p>}
    {error && <p>Error al cargar los datos.</p>}
    {data && (
      <div>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
        <p>Fecha de estreno: {data.release_date}</p>
      </div>
    )}
  </div>
  )
}

export default MovieContainer