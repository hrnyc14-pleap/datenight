import React from 'react';

const MovieView = ({data}) => (
    <div>
        <h3> {data.name} </h3>
        {data.rating}
    </div>
)

export default MovieView;
