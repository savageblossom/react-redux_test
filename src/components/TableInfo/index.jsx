import React from 'react';
import { connect } from "react-redux";

import CurrentPage from './CurrentPage';
import EntriesCount from './EntriesCount';

const TableInfo = props => (
<div className="tableInfo">
    <CurrentPage currentPage={props.currentPage} />
    <EntriesCount count={props.count} />
</div>
)

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    count: state.swapi_data.count
})

export default connect(mapStateToProps)(TableInfo);