import React from 'react';
import "../css/VideoCard.css";   

const base_url="https://image.tmdb.org/t/p/original/"

function VideoCard({movie}) {
    return (
        <div className="videocard">
            <img 
            src={`${base_url}${movie.backdrop_path}`}
            alt=""/>
        </div>
    )
}

export default VideoCard
