import axios from './axios';
import React, { useState, useEffect } from 'react'
import "./Banner.css"
import requests from './Request';
import Typewriter from "typewriter-effect";



function Banner() {
    const [movie, setMovie] = useState([])

    function Truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchCommedyMovies);
            console.log(request)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchData();

    }, [])


    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>

            <div className="banner__contents">
                <h1 className="banner__title">
                    <Typewriter
                        options={{
                            strings: [movie?.title || movie?.name || movie?.orginal_name],
                            autoStart: true,
                            loop: true,
                            cursor:'',
                            delay:100,
                            pauseFor:5000
                            
                        }}

                    />

                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">List</button>
                </div>
                <h1 className="banner__description">
                <Typewriter
                        options={{
                            strings: [Truncate(movie?.overview, 150)],
                            autoStart: true,
                            loop: true,
                            cursor:'',
                            delay:70,
                            pauseFor:20000
                            
                        }}

                    />
                   
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>

        </header>
    )
}

export default Banner
