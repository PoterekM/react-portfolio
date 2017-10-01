import constants from "./../../src/constants";
import * as actions from "./../../src/actions";
import profile from './../../src/reducers/index';

describe("profile index reducer", () => {
  const { defaultState, types } = constants;
  test('it should ensure state does not change if no action is triggered', () => {
    expect(profile([], { type: null })).toEqual([]);
  });

  test('it should update state upon action to show profile', () => {
    
    const newUser = {
      isFetching: true,
      userId: action.userId,
    };
    expect(profile(defaultState.profile, action) [action.userId]).toEqual(["Michelle", "turds"]);
  });

});
