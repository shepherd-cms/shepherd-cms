let defaultState = {};

const authReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "auth::set": {
      return action.payload || null;
    }
    default:
      return state;
  }
};

export default authReducer;
