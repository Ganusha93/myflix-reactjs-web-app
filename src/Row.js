import axios from './axios';
import React, { useState, useEffect } from 'react'
import "./Row.css"
import ReactStars from "react-rating-stars-component";
import Popup from 'reactjs-popup';


function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);
    const [youtubeId, setYoutubeId] = useState("");

    const base_Url = "https://image.tmdb.org/t/p/original/"
    const BASE_URL = 'https://www.youtube.com/embed/';
    const API_END_POINT = 'https://api.themoviedb.org/3/';
    const API_KEY = 'api_key=b358d927dabbc27225266cea22cda0e1';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData();


    }, [fetchUrl])



    const handleTrailer = (movie) => {


        axios.get(
            `${API_END_POINT}movie/${movie.id
            }?${API_KEY}&append_to_response=videos`
        )
            .then(response => {
                const youtubeKey = response.data.videos.results[0].key;
                setYoutubeId(youtubeKey);
                // console.log(youtubeId)

            }).catch((error) => {
                console.log("----------------------" + error.message)
            });

    }

    const opts = {
        height: "390",
        width: "100%",
        playerVar: {
            autoplay: 1
        }
    }


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">

                {movies.map((movie) =>
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (

                        <Popup key={movie.id}

                            trigger={<div className="poster__detail">
                                <img
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}

                                    src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                    alt={movie.name}
                                    onClick={() => {
                                        handleTrailer(movie);
                                    }}
                                />
                                <div className="poster__name">
                                    {movie.title || movie.name}

                                </div>
                                <div className="poster__rating">
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        activeColor="#ffd700"
                                        value={movie.vote_average / 2}
                                        edit={false}
                                        classNames="rating"
                                    /> <p>{movie.vote_average / 2}</p>

                                </div>

                            </div>} position="bottom left" >
                                
                            <div>{youtubeId && <iframe className="poster__trailer" src={`${BASE_URL}${youtubeId}`} ></iframe>}</div>
                            
                        </Popup>

                    ))}
            </div>

            {/* {trailerUrl && <Youtube videoId="{trailerUrl}" opts={opts}/>} */}


        </div>
    )
}

export default Row
