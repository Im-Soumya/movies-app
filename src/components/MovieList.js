import React from 'react'
import "../App.css"

const MovieList = (props) => {
  const FavComp = props.favcomponent
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt="movie"></img>
          <div 
            onClick={() => props.favourites(movie)}
            className='overlay d-flex align-items-center justify-content-center'>
            <FavComp />
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieList
