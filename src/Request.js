const API_KEY="b358d927dabbc27225266cea22cda0e1";
const requests={

    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchCommedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=b358d927dabbc27225266cea22cda0e1&language=en-US