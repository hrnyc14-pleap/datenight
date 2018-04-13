import React from 'react';

const RestaurantView = ({data}) => (
    <div className="view">
      {console.log('this is the restaurant view')}
        <h3> {data.name} </h3>
        <img style={{height: '500px', width: 'auto'}} src={data.image_url}/>
    </div>
)

export default RestaurantView;