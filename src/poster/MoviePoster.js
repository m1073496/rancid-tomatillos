import React from 'react'
import './MoviePoster.css'

const MoviePoster = ({id, poster_path, backdrop_path, title, average_rating, release_date, displayMovieDetails}) => {
  return (
    <div id={id} className='movie-poster' onClick={() => displayMovieDetails(id)}>
      <div className='poster-image'>
        <img src={poster_path} />
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default MoviePoster