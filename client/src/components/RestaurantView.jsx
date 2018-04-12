import React from 'react';

const RestaurantView = ({data}) => (
    <div>
      {console.log('this is the restaurant view')}
        <h3> {data.name} </h3>
        <img src={data.image_url}/>
    </div>
)

export default RestaurantView;