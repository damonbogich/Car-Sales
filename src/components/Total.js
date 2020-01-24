import React from 'react';
import { connect } from "react-redux"; //HOC

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price }</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    
    car: state.car
  }
}

export default connect(
  mapStateToProps
  
)(Total);
