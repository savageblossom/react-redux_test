import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from './store/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }
  }

  componentDidMount() {
    this.props.onDataFetched(this.state.currentPage)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentPage !== prevState.currentPage) {
      this.props.onDataFetched(this.state.currentPage)
    }
  }

  render() {
    const {results} = this.props.swapi_data
    
    return (
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Height (cm)</th>
              <th>Weight (kg)</th>
              <th>Hair Color</th>
              <th>Eye Color</th>
            </tr>
            {results && results.map((person, index) => {
              return(
              <tr key={index}>
                <td key={1}>{person.name}</td>
                <td key={2}>{person.gender}</td>
                <td key={3}>{person.height}</td>
                <td key={4}>{person.mass}</td>
                <td key={5}>{person.hair_color}</td>
                <td key={6}>{person.eye_color}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
        <div className="currentPage">
          {this.state.currentPage}
        </div>
        <div className="controls">
          <button onClick={() => this.setState({currentPage: this.state.currentPage - 1})}>Prev</button>
          <button onClick={() => this.setState({currentPage: this.state.currentPage + 1})}>Next</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    swapi_data: state.swapi_data
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
