import React from "react";
import { connect } from "react-redux";
import { fetchProfile } from "./../actions";

const Portfolio = ({ dispatch, user }) => {
  return(
    <div>
       <button onClick={() => {dispatch(fetchProfile())}}>View Profile</button>
     {user.user}
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
