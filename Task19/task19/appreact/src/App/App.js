import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from '../components/Movies';
import './App.css';
import React, { useState } from 'react'; // Import useState
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import MyProfile from '../Pages/MyProfile';
import NotFound from '../Pages/NotFound';
import NavBar from '../components/NavBar';

function App() {
  const [showMovies, setShowMovies] = useState(false); // Add showMovies state

  return (
    <>
      <BrowserRouter>
        <NavBar showMovies={showMovies} setShowMovies={setShowMovies} />
        <Routes>
          <Route
            path="/"
            element={<Home showMovies={showMovies} setShowMovies={setShowMovies} />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
