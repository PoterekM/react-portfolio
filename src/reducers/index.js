import constants from "./../constants";
const { defaultState, types } = constants;



export default (state = defaultState, action) => {
  let user;
  let newUser;
  let userId;
  switch (action.type) {
    case types.REQUEST_GIT:
    newUser = {
      isFetching: true,
      userId: action.userId,
    };
    newState = Object.assign({}, state, {
      [action.userId]: newUser
    });
    return newState;

    case types.SHOW_GIT:
    user = state[action.userId];
    newUser = Object.assign({}, user, {
      isFetching: false,
      user: action.user,
      userId: action.userId,
    });
      return newUser;
    default:
      return state;
  }

}
