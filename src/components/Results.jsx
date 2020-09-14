import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import '../css/Results.css';
import axios from '../axios';
import requests from '../requests';

function Results() {
    
    const [movies, setMovies] = useState([]);
    
    // this hooks makes this code to run everytime results loads or mounts
        useEffect(() => {
            async function fetchData() {
                const request = await axios.get(requests.fetchActionMovies)
                // console.log(request)
                setMovies(request.data.results);
                return request;
            }

            fetchData();
        }, []);
    
    
    return (
        <div className="results">
            {movies.map((movie) => (
                <VideoCard movie={movie}/>
            ))}
           
        </div>
    );
}

export default Results
