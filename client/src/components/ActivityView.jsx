import React from 'react';

const ActivityView = ({data}) => (
    <div className="view">
        <h3> {data.name} </h3>
        <img style={{height: '500px', width: 'auto'}} src={data.image_url}/>
    </div>
)

export default ActivityView;