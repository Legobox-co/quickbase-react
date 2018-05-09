import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Card} from '../../Components';
import {Col} from 'reactstrap';

class Scene extends Component {
	render (){
		return (
			<Col md={12}>
				<Col md={3}>
					<Card title="Projects">
						<div>The Dashboard Scene</div>
					</Card>
				</Col>
			</Col>
		)
	}
}

export default withRouter(Scene);