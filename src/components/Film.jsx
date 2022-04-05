import React from "react";
import '.../Films.css';


const Film =(props)=> {

    return (
        <div>
            {
               films.map(film=>(
                   <div className="film" key={film.id}>
                       <div className="top"> </div>
                       <div className="title">
                           <h1> {film.title} </h1>
                       </div>

                   </div>
               ))
            }
        </div>
    )
}
    export default Film;