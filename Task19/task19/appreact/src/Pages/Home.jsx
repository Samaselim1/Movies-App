import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Movies from '../components/Movies';

function Home() {
  const [showMovies, setShowMovies] = useState(false);

  const handleShowMoviesClick = () => {
    setShowMovies(true);
  };

  return (
    <div>
      <Typography variant="h4" style={{ color: 'white', textAlign: 'center', margin: '20px' }}>
        Home Page.
      </Typography>
      <Typography variant="h4" style={{ color: 'white', textAlign: 'center', margin: '20px' }}>
        Watch movies Online For Free. 
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={handleShowMoviesClick}>
          Show Movies
        </Button>
      </div>
      {showMovies && <Movies />}
    </div>
  );
}

export default Home;
