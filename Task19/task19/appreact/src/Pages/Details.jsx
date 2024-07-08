import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';


const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const overview = queryParams.get('overview');
  const releaseDate = queryParams.get('releaseDate');
  const voteAverage = queryParams.get('voteAverage');
  const runtime = queryParams.get('runtime');
  const genres = queryParams.get('genres');

  return (
    <DetailsContainer>
      <DetailsTitle>Movie Details</DetailsTitle>
      <MovieDetailsContainer>
        <MovieDetailsInfo>
          <MovieDetailsInfoTitle>{title}</MovieDetailsInfoTitle>
          <MovieDetailsInfoText>Release Date: {releaseDate}</MovieDetailsInfoText>
          <MovieDetailsInfoText>Vote Average: {voteAverage}</MovieDetailsInfoText>
          <MovieDetailsInfoText>Runtime: {runtime} minutes</MovieDetailsInfoText>
          <MovieDetailsInfoTitle>Overview:</MovieDetailsInfoTitle>
          <MovieDetailsInfoText>{overview}</MovieDetailsInfoText>
          <MovieDetailsInfoTitle>Genres:</MovieDetailsInfoTitle>
          <MovieDetailsInfoText>{genres}</MovieDetailsInfoText>
        </MovieDetailsInfo>
      </MovieDetailsContainer>
    </DetailsContainer>
  );
};


const DetailsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '20px',
});

const DetailsTitle = styled('h2')({
  fontSize: '24px',
  marginBottom: '20px',
  color: '#222',
});

const MovieDetailsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const MovieDetailsInfo = styled('div')({
  textAlign: 'left',
  marginBottom: '20px',
});

const MovieDetailsInfoTitle = styled('h3')({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#222',
});

const MovieDetailsInfoText = styled('p')({
  fontSize: '16px',
  color: '#555',
});



export default Details;
