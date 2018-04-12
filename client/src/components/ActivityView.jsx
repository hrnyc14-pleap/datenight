import React from 'react';

const ActivityView = ({data}) => (
    <div>
        <h3> {data.name} </h3>
        {data.cost}
    </div>
)

export default ActivityView;