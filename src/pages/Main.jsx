import React, { useState } from "react";
import { useMovieContext } from "../context/MovieProvider";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { useAuthContext } from "../context/AuthProvider";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, loading, getMovies } = useMovieContext();
  const { currentUser } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Search yapmak için lütfen giriş yapın.");
    } else {
      toastWarnNotify("Lütfen bir şeyler yazın.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center p-2">
        <input
          type="search"
          placeholder="Search Movie"
          className="w-80 h-8 rounded-md p-1 m-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered">Search</button>
      </form>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
