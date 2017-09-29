import React from "react";
import { connect } from "react-redux";
import { fetchProfile } from "./../actions";

const Portfolio = ({ dispatch, user }) => {
  return(
    <div>
       <button onClick={() => {dispatch(fetchProfile())}}>View Profile</button>
     <hr/>
    <a href="https://github.com/PoterekM">
      <img src={user.user.avatar_url}/>
      <h1>{user.user.login}</h1>
      <h4>{user.user.location}</h4>
    </a>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state
  };
};

export default connect(mapStateToProps)(Portfolio);
