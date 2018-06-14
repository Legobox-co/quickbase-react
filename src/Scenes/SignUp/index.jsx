import React, { Component } from 'react';
import {Col, Row, Container, Card, CardHeader, CardBody, FormGroup, Input, Button, Label} from 'reactstrap';

export class Scene extends Component {
  render() {
	return (
	  <Container>
	  	<Row>
			<Col md={12}>
				<Col md={4} className="grid-centering" style={styles.loginContainer}>
					<Card>
						<CardHeader>
							SignUp
						</CardHeader>
						<CardBody>
							<FormGroup>
								<Label for="fullname">Fullname</Label>
								<Input id="fullname"/>
							</FormGroup>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input id="email"/>
							</FormGroup>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input id="username"/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input id="password"/>
							</FormGroup>
							<FormGroup>
								<Label for="confirmpass">Confirmation Password</Label>
								<Input id="confirmpass"/>
							</FormGroup>
							<FormGroup>
								<Button color="primary">Signup</Button>
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
			</Col>
		</Row>
	  </Container>
	)
  }
};

const styles = {
	loginContainer: {
		float: 'none',
		marginTop: 50
	}
}


export default Scene;
