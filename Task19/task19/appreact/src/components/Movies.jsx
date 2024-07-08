import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { MoviesList, MovieItem, MovieImage, MovieTitle, MovieText, ReadMore, ReadLess, WatchButton, SearchInput } from './MoviesStyle';
import { useNavigate } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [expandedMovieId, setExpandedMovieId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiUrl = url + path + apiKey;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          setMovies(data.results);
        }
      })
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);

  const handleReadMoreClick = (movieId) => {
    setExpandedMovieId(movieId);
  };

  const handleReadLessClick = () => {
    setExpandedMovieId(null);
  };

  const handleWatchNowClick = (movieId, movie) => {
    navigate(`/details/${movieId}?title=${encodeURIComponent(movie.title)}&overview=${encodeURIComponent(movie.overview)}&releaseDate=${encodeURIComponent(movie.release_date)}&voteAverage=${encodeURIComponent(movie.vote_average)}&runtime=${encodeURIComponent(movie.runtime)}&genres=${encodeURIComponent(movie.genres.join(', '))}`);
  };
  

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" style={{ color: 'white', textAlign: 'left', margin: '10px' }}>
        Popular Movies
      </Typography>
      <SearchInput
        label="Search for a movie"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <MoviesList>
      {filteredMovies.map(movie => (
        <MovieItem key={movie.id}>
            <Card>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieText>{movie.release_date}</MovieText>
                <MovieText>Rating: {movie.vote_average}</MovieText>
                {expandedMovieId === movie.id ? (
                  <>
                    <MovieText>{movie.overview}</MovieText>
                    <ReadLess onClick={handleReadLessClick}>Read Less</ReadLess>
                  </>
                ) : (
                  <>
                    <MovieText>{movie.overview.substring(0, 100)}...</MovieText>
                    <ReadMore onClick={() => handleReadMoreClick(movie.id)}>
                      Read More
                    </ReadMore>
                  </>
                )}
                <WatchButton variant="contained" onClick={() => handleWatchNowClick(movie.id, movie)}>
                  Watch Now
                </WatchButton>
              </CardContent>
            </Card>
          </MovieItem>
        ))}
      </MoviesList>
    </div>
  );
}

export default Movies;
