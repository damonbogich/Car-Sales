import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux"; //HOC
import {addFeature} from '../Actions/AdditionalFeatureAction';

const AdditionalFeatures = props => {
  console.log('additionalfeatures props', props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature ={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
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
)(AdditionalFeatures);
