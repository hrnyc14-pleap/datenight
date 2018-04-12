import React from 'react';

const MovieView = ({data}) => (
    <div>
        <h3> {data.title} </h3>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
    </div>
)

export default MovieView;
