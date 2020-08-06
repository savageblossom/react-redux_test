import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from '../store/actions';

import Table from '../components/Table';
import TableControls from '../components/TableControls';
import TableInfo from '../components/TableInfo';


class App extends Component {
  componentDidMount() {
    this.props.onDataFetched(this.props.currentPage)
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentPage !== prevProps.currentPage) {
      this.props.onDataFetched(this.props.currentPage)
    }
  }

  render() {
    return (
      <div className="container">
        <Table />
        <TableInfo />
        <TableControls />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    prevPage: state.prevPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDataFetched: (currentPage) => dispatch(actionCreator.onDataFetched(currentPage)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
