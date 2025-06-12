"use client";

import HeroSection from "./HeroSection";
import Loading from "./Loading";
import MoviesGrid from "./MoviesGrid";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeContainer = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const API_URL =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=39bb1da39aea2fc87a20cffece846d80";

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        const moviesData = response.data.results;
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {!loading && <HeroSection movies={movies} />}

      {loading && <Loading />}

      {error && "HUBO UN ERROR"}
    </div>
  );
};

export default HomeContainer;
