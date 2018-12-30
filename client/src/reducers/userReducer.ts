let defaultState = {};

const userReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "user::update": {
      return {
        ...state,
        ...action.payload
      };
    }
    case "user::set": {
      return Object.assign({}, state, {
        ...action.payload
      });
    }
    default:
      return state;
  }
};

export default userReducer;
