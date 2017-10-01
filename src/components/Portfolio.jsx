import React from "react";
import { connect } from "react-redux";
import GetPortfolio from "./GetPortfolio";


const Portfolio = ({ dispatch, user }) => {
  let formAreaContent;
  console.log(user.userId)
  if (user.userId === 0) {
    formAreaContent =
      <div>
          <GetPortfolio/>
      </div>
  } else {
    formAreaContent =
    <div>
      <a target="_blank" href="https://github.com/PoterekM">
        <img src={user.user.avatar_url}/>
        <h1>{user.user.name}</h1>
      </a>
      <h4>{user.user.login}</h4>
      <h4>{user.user.location}</h4>
      <h6>Public Repositories: {user.user.public_repos}</h6>
    </div>
  }

  return(
    <div>
      {formAreaContent}
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
