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



};

export default Movie;

