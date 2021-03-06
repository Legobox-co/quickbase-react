import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import actions from '../Store/Actions'

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL, pages } = this.props

	var check = pages.indexOf(currentURL) > -1; //i.e the current page is amongst the visitor pages
    if (!this.props.isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
	  // then redirect (we use a React Router method)
	  if(check){
		  console.log("This section ran too")
		  dispatch(actions.setRedirectUrl(currentURL))
		  this.props.history.replace("/login")
	  }
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  console.log(ownProps)
  return {
    isLoggedIn: state.isAuthenticated,
    currentURL: ownProps.location.pathname
  }
}

export default withRouter(connect(mapStateToProps)(EnsureLoggedInContainer))