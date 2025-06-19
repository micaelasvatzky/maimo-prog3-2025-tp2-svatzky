"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CardScroll from "@/components/CardScroll";
import Loading from "@/components/Loading";

const GenresContainer = () => {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=39bb1da39aea2fc87a20cffece846d80`;
  const MOVIE_BY_GENRE_URL = (genreId) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=39bb1da39aea2fc87a20cffece846d80&with_genres=${genreId}`;

  useEffect(() => {
    const getGenres = async () => {
      setLoading(true);
      try {
        const genreRes = await axios.get(GENRE_URL);
        const genresData = genreRes.data.genres;
        setGenres(genresData);

        const movieRequests = genresData.map((genre) =>
          axios.get(MOVIE_BY_GENRE_URL(genre.id))
        );

        const responses = await Promise.all(movieRequests);

        const newMoviesByGenre = {};
        genresData.forEach((genre, index) => {
          newMoviesByGenre[genre.name] = responses[index].data.results;
        });

        setMoviesByGenre(newMoviesByGenre);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    getGenres();
  }, []);

  return (
    <div className=" text-white">
      {loading && <Loading />}
      {error && <p>Hubo un error al cargar los géneros.</p>}

      {!loading &&
        !error &&
        genres.map((genre) => (
          <div key={genre.id} className="mb-2">
            <h2 className="text-2xl font-bold">{genre.name}</h2>
            <CardScroll
              key={genre.id}
              title={genre.name}
              movies={moviesByGenre[genre.name]?.slice(0, 12) || []}
            />
          </div>
        ))}
    </div>
  );
};

export default GenresContainer;
