import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class AppCheck extends React.Component {
  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
        // dispatch(navigateTo(redirectUrl))
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoggedIn: state.isAuthenticated,
    redirectUrl: state.redirectUrl
  };
};

export default withRouter(connect(mapStateToProps)(AppCheck));
