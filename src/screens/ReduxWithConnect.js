import React from 'react';
import { connect } from 'react-redux';

function ReduxWithConnect(props) {
  console.log('inside Redux with connect... ', props);
  // const { dispatch } = props; // 1st way
  const { updateName } = props; // 2st way

  const changeName = (event) => {
    // console.log('inside udpate name');
    const name = event.target.value;
    console.log(name);
    // dispatch({ type: 'updateName', payload: { name } }); // 1st way
    updateName(name); // 2nd way
  };

  return (
    <div>
      <span>Enter Name</span>
      <input
        onChange={changeName}
        style={{ color: 'green', marginLeft: 10 }}
        type="text"
      ></input>
    </div>
  );
}

// 2nd way
const mapDispatchToProps = (dispatch) => {
  console.log('inside map to dispatch: ', dispatch);
  return {
    updateName: (name) =>
      dispatch({
        type: 'updateName',
        payload: { name },
      }),
  };
};

// export default connect()(ReduxWithConnect); // 1st way
export default connect(null, mapDispatchToProps)(ReduxWithConnect); // 2nd way
