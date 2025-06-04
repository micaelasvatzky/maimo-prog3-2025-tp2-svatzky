"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard"

const MoviesGrid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=39bb1da39aea2fc87a20cffece846d80"
        );
        const responseData = response.data.results;
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
   <div className="grid grid-cols-7 grid-rows-3 gap-12">
      {!loading &&
        data.map(({ id, title, poster_path }) => (
          <MovieCard key={id} id={id} title={title} image = {poster_path}/>
        ))}

      {loading && "Loading..."}

      {error && "HUBO UN ERROR"}
    </div>);
};

export default MoviesGrid;
