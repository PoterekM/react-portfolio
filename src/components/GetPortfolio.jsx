import React from "react";
import { connect } from "react-redux";
import { fetchProfile } from "./../actions";

class GetPortfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchProfile());
  }

  render () {
    return (
      <div>
      </div>
  );
}
}
export default connect()(GetPortfolio);
