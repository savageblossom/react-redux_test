import React from 'react';
import {connect} from 'react-redux';

const Table = (props) => (
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
        {props.results && props.results.map((person, index) => {
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
)

export default connect(state => ({results: state.swapi_data.results}))(Table);