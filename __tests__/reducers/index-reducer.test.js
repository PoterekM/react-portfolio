import constants from "./../../src/constants";
import * as actions from "./../../src/actions";

describe("index reducer", () => {

  test('should return equivalent state if no action type is recognized', () => {
    expect(defaultState([], { type: null })).toEqual([]);
  });

  test('imported value should match action type string', () => {
    expect(constants.ADD_TICKET).toEqual('testing testing 123');
  });

});
