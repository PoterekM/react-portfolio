import React from "react";
import { connect } from "react-redux";
import { fetchProfile } from "./../actions";

const GetPortfolio = ({ dispatch, user }) => {
  return(
    <div>
       <button onClick={() => {dispatch(fetchProfile())}}>View Github Details</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state
  };
};

export default connect(mapStateToProps)(GetPortfolio);
