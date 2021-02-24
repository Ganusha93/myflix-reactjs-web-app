import React from 'react'

function FilteredMovie({movie,setMovie,Truncate,setQuery}) {
    return (
        
        <div　className="filterd__list">
            {console.log(movie)}
            <li  onClick={() => {setMovie(movie);setQuery("")}} >{Truncate(movie.title,30)}</li>
        </div>
    )
}

export default FilteredMovie
