import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Collapse
} from "reactstrap";
import {withRouter} from 'react-router-dom';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			toggle: false
		}
	}

	static propTypes = {
		isLoggedIn: PropTypes.bool.isRequired
	}

	render(){
		let loggedStatus = this.props.isLoggedIn === true
			? <UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					Mozartted
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem>
					Dashboard
					</DropdownItem>
					<DropdownItem>
					Settings
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>
					Logout
					</DropdownItem>
				</DropdownMenu>
				</UncontrolledDropdown>
			: <NavLink>Login</NavLink>;

		return (
			<React.Fragment>
				<Navbar className="App-navbar" color="light" light expand="md">
					<NavbarBrand>
						Spectre
					</NavbarBrand>
					<NavbarToggler></NavbarToggler>
					<Collapse isOpen={this.state.toggle} navbar>
						<Nav className="ml-auto">
							<NavItem>
								<NavLink>Home</NavLink>
							</NavItem>
							{loggedStatus}
						</Nav>
					</Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		isLoggedIn: state.isAuthenticated
	}
}

export default withRouter(connect(mapStateToProps)(Header));