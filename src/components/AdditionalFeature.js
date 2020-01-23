import React from 'react';
import { connect } from "react-redux"; //HOC
import {addFeature} from '../Actions/AdditionalFeatureAction';

const AdditionalFeature = props => {
  console.log(props, "k");
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => props.addFeature(props.feature)} className="button" >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  {addFeature}
)(AdditionalFeature);
