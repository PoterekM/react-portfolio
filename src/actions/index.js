import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const requestGit = (userId) => ({
  type: types.REQUEST_GIT,
  userId: userId
});

export const showGit = (user, userId) => ({
  type: types.SHOW_GIT,
  user,
  userId
})


export function fetchProfile(dispatch) {
  return function (dispatch) {
    let user;
    const userId = v4();
    dispatch(requestGit(userId));
    return fetch("https://api.github.com/users/poterekm", {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    }).then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then(function(json) {
      console.log("CHECK OUT THIS SWEET API RESPONSE:", json)
    });
  };
}
