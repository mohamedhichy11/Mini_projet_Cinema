import React, { useEffect, useState } from 'react';
import "./banner.css";
import MovieContent from '../components/MovieContent';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';
import datamovie from '../data/datamovie';
function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    setMovies(datamovie)
      
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSliderchange = (id) => {
    const newMovies = movies.map(movie => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="banner">
      {movies && movies.length > 0 && movies.map(movie => (
        <div key={movie._id} className="movie"> 
          <img src={movie.bgImg} alt="Background Image" className={`bgImg ${movie.active ? "active" : undefined}`} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie} />
              </div>

              <div className="col-lg-6 col-md-12">
                <PlayBtn movie={movie} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSliderchange} />}
    </div>
  );
}

export default Banner;
