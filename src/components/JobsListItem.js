import React from 'react';
import './JobsListItem.css'

const JobsListItem = (props) => (
    <div className="JobsListItem">
        <div className="left">
            <b>{props.title}</b>
            <div>{props.company}</div>
        </div>
        <div className="right">
            <b>{props.type}</b>
            <div>{props.created_at}</div>
        </div>
    </div>
)

export default JobsListItem;