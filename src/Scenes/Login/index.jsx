import React, { Component } from "react";
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
  render() {
    return (
		<Container>
			<Row>
				<Col md={12}>
						<Col className="grid-centering" md={3} style={styles.loginContainer}>
							<Card>
								<CardHeader>
									Login
								</CardHeader>
								<CardBody>
									<Form>
										<FormGroup>
											<Label for="email">Username/Email</Label>
											<Input id="email"/>
										</FormGroup>
										<FormGroup>
											<Label for="password">Password</Label>
											<Input id="password"/>
										</FormGroup>
										<FormGroup>
											<Button color="primary">Login</Button>
										</FormGroup>
									</Form>
								</CardBody>
							</Card>
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