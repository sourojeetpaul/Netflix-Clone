import React, {useState, useEffect} from 'react'
import "./Row.css"
import axios from './axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
// import requests from './Requests'
// import { useImmer } from 'use-immer';
// import { isMap } from 'immer/dist/internal'


function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    const base_url="https://image.tmdb.org/t/p/original/"

    
    useEffect(() => {

                async function fetchData() {
                const request = await axios.get(fetchUrl)
                setMovies(request.data.results)
                return request
            }
            fetchData()
        
    }, [fetchUrl]);
    

    const opts={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };


    const handleClick = (movie) =>{
        if(trailerUrl) {
            setTrailerUrl("");
        } else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"))

            })
            .catch((error) => console.log(error))
        }

    }
console.log(movies)

    return (
        
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(
                    (movie) => (
                
                <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                onClick = {() => handleClick(movie)}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} 
                alt={movie.name}
                />
            ))} 
            </div>
            {trailerUrl && <YouTube videoId= {trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
