import axios from './axios';
import React, { useState, useEffect } from 'react'
import "./Banner.css"
import requests from './Request';
import Typewriter from "typewriter-effect";
import Popup from 'reactjs-popup';
import FilteredMovie from './FilteredMovie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




function Banner() {
    const [movie, setMovie] = useState([])
    const [movieList, setMovieList] = useState([])
    const [youtubeId, setYoutubeId] = useState("");
    const [query, setQuery] = useState("")
    const [filteredMovies, setFilteredMovies] = useState([])
    const BASE_URL = 'https://www.youtube.com/embed/';
    const API_END_POINT = 'https://api.themoviedb.org/3/';
    const API_KEY = 'api_key=b358d927dabbc27225266cea22cda0e1';

    function Truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchCommedyMovies);

            setMovieList(request.data.results);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchData();

    }, [])

    const handleTrailer = (movie) => {
        console.log(movie)
        axios.get(
            `${API_END_POINT}movie/${movie.id
            }?${API_KEY}&append_to_response=videos`
        ).then(response => {
            // console.log("click")
            const youtubeKey = response.data.videos.results[0].key;
            console.log(youtubeKey)
            if (youtubeKey) {
                setYoutubeId(youtubeKey);
            }
            console.log(youtubeId)

        }).catch((error) => {
            setYoutubeId("")
            console.log("----------------------" + error.message)
        });

    }

    const searchMovie = (e) => {
        setQuery(e.target.value)
        const filteredMovies = movieList.filter(movie => {
            return movie.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredMovies(filteredMovies);
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                // backgroundPosition: "center center",
            }}>
        <div className="banner--fadeBottom">
            <div className="banner__contents">
                <h1 className="banner__title">
                    <Typewriter
                        options={{
                            strings: [(movie?.title || movie?.name || movie?.orginal_name) + `-${new Date(movie?.release_date).getFullYear()}`],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            delay: 100,
                            pauseFor: 5000

                        }}

                    />

                </h1>

                <Popup key={movie.id}

                    trigger={<div>
                        <button className="banner__button"
                            onClick={() => {
                                handleTrailer(movie);
                            }}
                        >Play</button>
                    </div>} position="center center" >

                    <div>{youtubeId ? (<iframe className="poster__trailer" src={`${BASE_URL}${youtubeId}`} ></iframe>) : null}</div>
                    {!youtubeId ? (<img src="https://i.ibb.co/XSyjQK0/unavailable.jpg" className="unavailable__video"></img>) : null}
                </Popup>
                <div style={{textAlign: "center"}}>
                <input className="search__movie" icon="search" lable="search movie" onChange={(e) => searchMovie(e)}/>
                <a className="search__icon"> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
                {/* <i class="fas fa-search"></i> */}
                </div>

                {/* </div> */}
                <h1 className="banner__description">
                   
                    <Typewriter
                        options={{
                            strings: [Truncate(movie?.overview, 150)],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            delay: 70,
                            pauseFor: 30000

                        }}

                    />

                </h1>
            </div>
            </div>
            <div className={filteredMovies &&query&&"banner__List"}>
                               

                <ul style={{listStyleType: "none"}}>
                {filteredMovies.map(movie => {
                 return(<div　className="filterd__list">
                
            {query &&<li  
            onClick={() => {setMovie(movie);setQuery("");setFilteredMovies([])}} >{Truncate(movie.title,30)}
            </li>}
             </div> )     
                   })}
                   </ul>
            </div>
        </header>
    )
}

export default Banner
