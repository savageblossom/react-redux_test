import React from 'react';

const CurrentPage = props => (
    <div className="currentPage">
        Current Page: <span>{props.currentPage}</span>
    </div>
)

export default CurrentPage;