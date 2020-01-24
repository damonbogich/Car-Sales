import React from 'react';
import { connect } from "react-redux"; //HOC

const AddedFeature = props => {
  console.log('added feature props', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

