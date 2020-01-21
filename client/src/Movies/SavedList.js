import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <button onClick = {() => props.removeFromSavedList(movie)} key = {movie.id} className = 'saved-movie'>{movie.title}</button>
    ))}
    <Link className="home-button" to = "/">Home</Link>
  </div>
);

export default SavedList;
