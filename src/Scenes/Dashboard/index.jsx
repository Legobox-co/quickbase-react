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

class Scene extends Component {
	render (){
		return (
			<Row style={style}>
				<Container>
					<Col md={12}>
						<Col md={7}>
							<LegoCard>
								<div>The Dashboard Scene</div>
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