import React from 'react'
import Banner from '../Banner'
import "./HomeScreen.css"
import Nav from '../Nav'
import requests from '../Request'
import Row from "../Row"

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow /> 
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchCommedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentry" fetchUrl={requests.fetchDocumentries} />


        </div>
    )
}

export default HomeScreen
