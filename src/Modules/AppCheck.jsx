import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import {navigateTo} from "../Store/Actions";

class AppCheck extends React.Component {
  componentDidUpdate(prevProps) {
    const { redirectUrl, history } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
		// dispatch(navigateTo(redirectUrl));
		history.push(redirectUrl);
    } else if (isLoggingOut) {
	  // do any kind of cleanup or post-logout redirection here
	  history.push('/login');
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
