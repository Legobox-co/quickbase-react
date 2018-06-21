import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../Store/Actions'
import Button from './Button';
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
  Container,
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
		this.dropdown = this.dropdown.bind(this);
		this.toggleLogState = this.toggleLogState.bind(this);
		this.loginUser = this.loginUser.bind(this);
	}

	static propTypes = {
		isLoggedIn: PropTypes.bool.isRequired
	}

	dropdown(){
		this.setState({
			toggle: !this.state.toggle
		});
	}

	toggleLogState(){
		const {dispatch} = this.props;
		dispatch(actions.logout());
	}

	loginUser(){
		const { dispatch } = this.props;
		dispatch(actions.login());
	}

	render(){
		let loggedStatus = this.props.isLoggedIn === true
			? 
			<React.Fragment>
				<NavLink style={{cursor: 'pointer'}} onClick={this.loginUser} style={{padding: 9, fontSize: 15}}>
					+ New Project
				</NavLink>
				<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret style={{fontSize:15, color: '#2d2d2d'}}>
					<img src={require('../assets/round_headshot.png')} style={{width: 30}}/> Mozartted
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem>
					Dashboard
					</DropdownItem>
					<DropdownItem>
					Settings
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem onClick={this.toggleLogState}>
					Logout
					</DropdownItem>
				</DropdownMenu>
				</UncontrolledDropdown>
			</React.Fragment>
			: <React.Fragment>
				<NavLink style={{cursor: 'pointer'}} onClick={this.loginUser}>
					<Button type="primary" value="Signup"/>
				</NavLink>
				<NavLink style={{cursor: 'pointer'}} onClick={this.loginUser}>
					<Button type="primary" value="Login" />
				</NavLink>
			</React.Fragment>
			;

		return (
			<React.Fragment>
				<Navbar className="App-navbar" color="transparent" light expand="md">
					<Container>
						<NavbarBrand>
							<NavLink style={{ cursor: 'pointer' }} onClick={()=> this.props.history.push('/')}>
								<img src={require('../assets/logo.png')} width={30}/>
							</NavLink>
						</NavbarBrand>
						<NavbarToggler onClick={this.dropdown}></NavbarToggler>
							<Collapse isOpen={this.state.toggle} navbar>
								<Nav className="ml-auto">
									{loggedStatus}
								</Nav>
							</Collapse>
					</Container>
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