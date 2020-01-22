import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    return savedList.includes(movie) ? '' : setSavedList([...savedList, movie]);
  };

  const removeFromSavedList = (movie) => {
    const newList = savedList.filter((e) => {
      return e !== movie;
    });
    setSavedList(newList);
  }


  return (
    <div className = 'app'>
      <SavedList removeFromSavedList = {removeFromSavedList} list={savedList} />
      <Route exact path = "/" >
        <MovieList />
      </Route>
      <Route exact path = "/movies/:id">
      <Movie addToSavedList = {addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
