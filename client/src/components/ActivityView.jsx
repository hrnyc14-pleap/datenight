import React from 'react';

const ActivityView = ({data}) => (
    <div>
        <h3> {data.name} </h3>
        {data.price}
        <img src={data.img_url}/>
    </div>
)

export default ActivityView;