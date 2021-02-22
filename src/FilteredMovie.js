import React from 'react'

function FilteredMovie({movie,setMovie}) {
    return (
        
        <div>
            {/* <h1>hello there</h1> */}
            <div onClick={() => setMovie(movie)}>{movie.title}</div>
        </div>
    )
}

export default FilteredMovie
