import React from 'react';

const RestaurantView = ({data}) => (
    <div>
        <h3> {data.name} </h3>
        {data.rating}
    </div>
)

export default RestaurantView;