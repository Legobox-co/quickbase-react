import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {
	Col,
	Card,
	Row,
	Container,
	CardBody,
	Form,
	CardHeader,
	FormGroup,
	Label,
	Input,
	Button
} from "reactstrap"

class Scene extends Component {
	render (){
		return(
			<Container>
				<Row>
					<Col md={12}>
						<Col className="grid-centering" md={8} style={styles.loginContainer}>
							<h1 style={{textAlign:'center', fontWeight: 300}}>
								Welcome to Spectre
							</h1>
						</Col>
					</Col>
				</Row>
			</Container>
		)
	}
}

const styles = {
	loginContainer: {
		float: 'none',
		marginTop: 50
	}
}

export default withRouter(Scene);