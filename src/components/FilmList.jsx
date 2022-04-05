import React from "react";
import { useSelector } from "react-redux";
import Film from '/Film';
import '../Films.css';


import React from 'react'

const FilmList = () => {
    const films =  useSelector( state => state.filmReducer.films);
    console.log(films)

  return (
    <div className="film-grid"><Film films = {films} />
    </div>
  )
}

export default FilmList