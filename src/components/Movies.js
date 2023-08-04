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




};

export default Movie;

