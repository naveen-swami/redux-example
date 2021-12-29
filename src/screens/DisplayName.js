import React from 'react';
import { connect } from 'react-redux';

function DisplayName(props) {
  console.log('props...: ', props);
  const { name } = props;
  return (
    <div>
      <h3>Updated Name: {name}</h3>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  console.log('inside map to state props.:  ', reduxState);
  return reduxState.nameReducer;
};

export default connect(mapStateToProps)(DisplayName);
