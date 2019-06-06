import React from 'react';
import {  Link } from 'react-router-dom';

const MovieCard = props => {
  console.log(props.movie.title)
  return( 
    <Link to={`/movies/${props.movie.id}`}>
    <div className="movie-card">
      
      <h2>{props.movie.title}</h2>
      
      
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={props.movie.star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    </Link>
  )
};

export default MovieCard;
