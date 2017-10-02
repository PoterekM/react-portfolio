import React from "react";
import { connect } from "react-redux";
import GetPortfolio from "./GetPortfolio";


const Portfolio = ({ dispatch, user }) => {


  return(
    <div>
      <GetPortfolio/>
      <a target="_blank" href="https://github.com/PoterekM">
        <img src={user.avatar_url}/>
        <h1>{user.name}</h1>
      </a>
      <h4>{user.login}</h4>
      <h4>{user.location}</h4>
      <h6>Public Repositories: {user.public_repos}</h6>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Portfolio);
