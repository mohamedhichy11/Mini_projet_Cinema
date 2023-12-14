import React from 'react'
import "./movieContent.css"
import cc from "../images/transformer-title.png"
import Button  from './Button'
function MovieContent({movie}) {
  return (
      <div className={`content ${movie.active ? "active" : undefined}`}>
        <img src={movie.titleImg}  alt="" className="movie-title" />
        <h4>
            <span>{movie.year}</span>
            <span><i>{movie.ageLimit}</i></span>
            <span>{movie.length}</span>
            <span>{movie.category}</span>
        </h4>
        <p>
        {movie.description}
        </p>
        <div className="button">
          <Button icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="book"
          color="#ff3700"
          bgColor="#fff"
          
          />
          <br />
          <br />

          <Button icon={<ion-icon name="add-outline"></ion-icon>} name="my list" />
        </div>
    </div>
  )
}

export default MovieContent
