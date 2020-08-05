import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from './store/actions';

class App extends Component {
  async componentDidMount() {
    this.props.onDataFetched()
  }

  render() {
    return (
      <div className="App" onClick={e => {
        console.log(this.props.swapi_data)
      }}>
        {/* <div className="Age-label">
          your age: <span><strong>{this.props.age} </strong></span>
          <em>({this.props.age > 18 ? "You're an adult!" : "You're not adult :c"})</em>
        </div>
        <button onClick={this.props.onBecomeAdult}>Become adult!</button>
        <button onClick={this.props.onLoggedIn}>Log in!</button>
        <h2>{this.props.logged ? "You're adult and thus logged in!" : "You're not logged in"}</h2>
        <span style={{color: "red"}}>{this.props.error ? this.props.error : null}</span> */}
        <p>
          asdasd
        </p>
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
    onDataFetched: () => dispatch(actionCreator.onDataFetched()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
