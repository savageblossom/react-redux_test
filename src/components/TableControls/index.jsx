import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions';

const TableControls = props => (
    <div className="controls">
        <button onClick={() => props.onChangePage(['SUBSTR', 1])}>Prev</button>
        <button onClick={() => props.onChangePage(['ADD', 1])}>Next</button>
    </div>
)

export default connect(null, dispatch => ({
    onChangePage: ([operation, number]) => dispatch(actionCreator.onChangePage([operation, number]))
}))(TableControls);