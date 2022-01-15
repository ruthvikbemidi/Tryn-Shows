import React, { useState, useEffect } from "react";
import instance from "../axios";
import "./Row.css";

const base_image_url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);

      setMovies(request.data.results);
      // console.log(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="image"
            src={`${base_image_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}