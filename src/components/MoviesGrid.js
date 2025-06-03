"use client";

import { useState, useEffect } from "react";
import axios from "axios";

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

  return (<div>
    {loading && <p>Cargando...</p>}
    {error && <p>Hubo un error al cargar los datos.</p>}
    {!loading && !error && (
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    )}
  </div>);
};

export default MoviesGrid;
