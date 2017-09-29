import React from "react";
import { connect } from "react-redux";
import { fetchProfile } from "./../actions";

const Portfolio = ({ dispatch, profile }) => {
  return(
    <div>
       <button onClick={() => {dispatch(fetchProfile())}}>View Profile</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    profile: state
  };
};

export default connect(mapStateToProps)(Portfolio);
