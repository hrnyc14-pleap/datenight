import React from 'react';

const MovieView = ({data}) => (
    <div className="view">
        <h3> {data.title} </h3>
        <img style={{height: '500px', width: 'auto'}} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
    </div>
)

export default MovieView;
