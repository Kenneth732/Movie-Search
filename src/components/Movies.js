import React, { useState } from 'react';
import './Movie.css';

//api
const api = "https://www.omdbapi.com/?";
//api key
const apiKey = "apikey=18eaeb4f";

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return;
    }

    fetch(`${api}s=${searchTerm}&${apiKey}&type=movie&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
          setErrorMessage('');
        } else {
          setMovies([]);
          setErrorMessage('No results found.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="movie-search-app">
      <h2>Movie Search App</h2>

      <div className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Enter a movie title"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-item">
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              <p>Type: {movie.Type}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))
        ) : (
          <p>{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Movie;

