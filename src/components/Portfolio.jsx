import React from "react";
import { connect } from "react-redux";
import { fetchProfile } from "./../actions";

const Portfolio = ({ dispatch, user }) => {
  return(
    <div>
       <button onClick={() => {dispatch(fetchProfile())}}>View Profile</button>
     UserName: {user.user.login}
     User Location: {user.user.location}
     user Image: <img src={user.user.avatar_url}/>
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
