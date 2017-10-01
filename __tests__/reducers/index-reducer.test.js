import constants from "./../../src/constants";
import * as actions from "./../../src/actions";
import profile from './../../src/reducers/index';

describe("index reducer", () => {
  const { defaultState, types } = constants;
  test('should return equivalent state if no action type is recognized', () => {
    expect(profile([], { type: null })).toEqual([]);
  });

  test('imported value should match action type string', () => {
    expect(constants.SHOW_GIT).toEqual('Michelle');
  });

});
