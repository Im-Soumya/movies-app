import React from 'react'

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => {
        <div>
          <img src={movie.Poster} alt="movie"></img>
          console.log(movie.Poster)
        </div>
      })}
    </>
  )
}

export default MovieList
