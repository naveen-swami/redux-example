const UPDATE_NAME = 'updateName';

const intiialNameState = {
  name: 'Naveen',
};

export default (state = intiialNameState, action) => {
  console.log('inside name reducer', action);
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};
