import React from 'react';

export default class Button extends React.Component{
	render(){
		let background = null
		switch (this.props.type) {
			case 'primary':
				background = {
					main: '#382DB4',
					hover: '#382DB4'
				}
				break;
			case 'secondary':
				background = {
					main: '#382DB4',
					hover: '#382DB4'
				}
				break;

			case 'success':
				background = {
					main: '#382DB4',
					hover: '#382DB4'
				}
				break;

			case 'failure':
				background = {
					main: '#382DB4',
					hover: '#382DB4'
				}
				break;
		
			default:
				break;
		}
		return (
			<button style={{...styles, ...{background: background.main, hover:{
				background: background.hover
			}}}} onClick={this.props.onClick}>
				{this.props.value}
			</button>
		)
	}
}

const styles = { 
	color: '#fff', 
	padding: 10, 
	borderRadius: 5, 
	border: "none", 
	fontSize: 17,
	fontFamily: 'Montserrat, sans-serif',
	fontWeight: 'bold',
	transition: '0.1s ease 0.1s ',
}