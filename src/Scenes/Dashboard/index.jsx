import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Card as LegoCard} from '../../Components';

import {
	Col, 
	Card, 
	CardHeader, 
	CardBody, 
	Row, 
	Container
} from 'reactstrap';
import OauthLogin from '../../Oauth/oauthAccessor'

class Scene extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.githubFailure = this.githubFailure.bind(this)
		this.githubSuccess = this.githubSuccess.bind(this)
	}

	githubSuccess(data){
		console.log(data)
	}

	githubFailure(err){
		console.log(err)
	}
	render (){
		return (
			<Row style={style}>
				<Container>
					<Col md={12}>
						<Col md={7}>
							<LegoCard>
								<div>The Dashboard Scene</div>
							</LegoCard>
							<LegoCard>
								<OauthLogin
									buttonText="Refresh Github Token"
									clientId = "3c9756a2ed212663d418"
									redirectUri="http://spectre.local:3000/github/callback"
									authorizeUrl="https://github.com/login/oauth/authorize"
									onSuccess={this.githubSuccess}
									onFailure={this.githubFailure}
								/>
							</LegoCard>
						</Col>
						<Col md={5}>
							<Card>
								<CardHeader>
									Projects
								</CardHeader>
								<CardBody>
									body
								</CardBody>
							</Card>
						</Col>
					</Col>
				</Container>
			</Row>
		)
	}
}

let style = {
	marginTop: '20px'
}
export default withRouter(Scene);