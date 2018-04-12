import React from 'react';

const RestaurantView = ({data}) => (
    <div>
        <h3> {data.name} </h3>
        <img src={data.image_url}/>
    </div>
)

export default RestaurantView;