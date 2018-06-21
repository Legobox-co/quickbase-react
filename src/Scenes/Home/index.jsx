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
	Input
} from "reactstrap"
import {Button} from '../../Components'
import './home.css'

class Scene extends Component {
	render (){
		return(
			<React.Fragment>
				<div style={styles.background}>
					<Container>
						<Row>
							<Col md={12}>
								<div style={styles.header}>
									<img src={require('../../assets/DevOps Illustration.png')} style={styles.headerIllustration} />
								</div>
								<Col md={8} style={styles.loginContainer}>
									<h1 style={{ fontWeight: 'bolder', fontSize:80, fontFamily:'Montserrat, sans-serf', marginTop: 40}}>
											Speedy Deployments for Your Apps
									</h1>
									<p style={{ fontWeight: 'light', fontSize: 30, fontFamily: 'Montserrat, sans-serf', marginTop: 30 }}>Quick deployment mechanism for your apps</p>
									<Button type="primary" value="Get Started"/>
								</Col>
							</Col>
						</Row>
						<Row style={{marginTop:300}}>
							<Col md={12} className="Home-card">
								<Col md={4} style={styles.loginContainer}>
									<Button type="primary" value="Get Started"/>
								</Col>
								<Col md={4} style={styles.loginContainer}>
									<Button type="primary" value="Get Started"/>
								</Col>
								<Col md={4} style={styles.loginContainer}>
									<Button type="primary" value="Get Started"/>
								</Col>
							</Col>
						</Row>
					</Container>
				</div>
				<div style={styles.background2}>
					<Container>
						<Row>
							<Col md={12}>
								<div style={styles.header}>
									<img src={require('../../assets/DevOps Illustration.png')} style={styles.headerIllustration} />
								</div>
								<Col md={8} style={styles.loginContainer}>
									<h1 style={{ fontWeight: 'bolder', fontSize:80, fontFamily:'Montserrat, sans-serf', marginTop: 40}}>
											Speedy Deployments for Your Apps
									</h1>
									<p style={{ fontWeight: 'light', fontSize: 30, fontFamily: 'Montserrat, sans-serf', marginTop: 30 }}>Quick deployment mechanism for your apps</p>
									<Button type="primary" value="Get Started"/>
								</Col>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		)
	}
}

const styles = {
	loginContainer: {
		// float: 'none',
	},
	background: {
		background: 'url('+require('../../assets/background1.png')+')',
		width: '100%',
		height: 2000,
		backgroundSize:'100% 1219px',
		backgroundRepeat: 'no-repeat',
		resizeMode: 'cover'
	},
	background2: {
		background: 'url('+require('../../assets/background2.png')+')',
		width: '100%',
		height: 2000,
		backgroundSize:'100% 1219px',
		backgroundRepeat: 'no-repeat',
		resizeMode: 'cover'
	},
	header:{
		height: 700,
		position: 'absolute',
		width: '100%'
	},
	headerIllustration:{
		position: 'absolute',
		right: 0,
		bottom: 100
	}
}

export default withRouter(Scene);