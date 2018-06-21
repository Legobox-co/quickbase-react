import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Card as LegoCard} from '../../Components';
import {Doughnut} from 'react-chartjs';
import './index.css'

import {
	Col, 
	Nav, 
	Row, 
	Card, 
	Button, 
	NavItem, 
	TabPane, 
	NavLink, 
	CardText,
	Container,
	CardTitle, 
	TabContent, 
} from 'reactstrap';
import OauthLogin from '../../Oauth/oauthAccessor'
import classnames from 'classnames'

class Scene extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1',
			chartData:[
				{
					value: 300,
					color: "#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				}, {
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				}, {
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				}
			],
			chartOptions: {
				segmentShowStroke: true,
				segmentStrokeColor: "#fff",
				segmentStrokeWidth: 2,
				percentageInnerCutout: 50,
				animiationSteps: 100,
				animationEasing: "easeOutBounce"
			}
		};

		this.githubFailure = this.githubFailure.bind(this)
		this.githubSuccess = this.githubSuccess.bind(this)
	}

	githubSuccess(data){
		console.log(data)
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	githubFailure(err){
		console.log(err)
	}
	render (){
		return (
			<Col md={12} xs={12} style={{background: '#F7F7F7', minHeight: 1000}}>
			<Container>
				<Row style={style}>
				<Col md={12}>
					<h3 style={{fontWeight: "lighter"}}>Project Details</h3>
					<p>A board overview of your project over the week</p>
					<Col md={12} style={{padding:0}}>
						<LegoCard>
							<Col md={12} style={{borderBottom: '1px solid #ededed', marginBottom:40}}>
								<Col md={6}>
									<p style={{fontFamily: "Montserrat"}}>Total Deployments</p>
									<h3 style={{fontFamily: "Montserrat", fontWeight: "Bold", fontSize: 21}}>19</h3>
								</Col>
								<Col md={6}>
									<h3 style={{fontFamily: "Montserrat", fontWeight: "Bold", fontSize: 21, paddingTop: 29}}>Details</h3>
								</Col>
							</Col>
							<Col md={12} noPadding={true}>
								<Col md={6} noPadding={true}>
									<Col md={6} noPadding={true}>
										<Doughnut data={this.state.chartData} options={this.state.chartOptions}/>
									</Col>
									<Col md={6} noPadding={true}>
										<div className="Dashboard-headers">
											Weekly Stats
										</div>
										<ul className="Dashboard-stats-list">
											<li className="Dashb-list">
												<span className="Dashb-stats-left">Successful deployments</span>
												<span className="Dashb-stats-right" >15</span>
											</li>
											<li className="Dashb-list">
												<span className="Dashb-stats-left">Failed deployments</span>
												<span className="Dashb-stats-right" >15</span>
											</li>
											<li className="Dashb-list">
												<span className="Dashb-stats-left">Incomplete  deployments</span>
												<span className="Dashb-stats-right" >15</span>
											</li>
										</ul>
									</Col>
								</Col>
								<Col md={6} >
									<div className="Dashboard-headers">
											Weekly Stats
										</div>
										<ul className="Dashboard-stats-list">
											<li className="Dashb-list">
												<span className="Dashb-stats-left">Successful deployments</span>
												<span className="Dashb-stats-right" >15</span>
											</li>
											<li className="Dashb-list">
												<span className="Dashb-stats-left">Failed deployments</span>
												<span className="Dashb-stats-right" >15</span>
											</li>
											<li className="Dashb-list">
												<span className="Dashb-stats-left">Incomplete  deployments</span>
												<span className="Dashb-stats-right" >15</span>
											</li>
										</ul>
								</Col>
							</Col>
						</LegoCard>
					</Col>
					<Col md={12} style={{padding:0, marginTop: 50}}>
						<LegoCard>
							<Nav tabs>
								<NavItem style={{marginBottom: 30}}>
									<NavLink
									style={{border: 'none'}}
									className={classnames({ 'Dashb-tab-active': this.state.activeTab === '1' })}
									onClick={() => { this.toggle('1'); }}
									>
									Tab1
									</NavLink>
								</NavItem>
									<NavItem>
										<NavLink
										style={{border: 'none'}}
										className={classnames({ 'Dashb-tab-active': this.state.activeTab === '2' })}
										onClick={() => { this.toggle('2'); }}
										>
											Moar Tabs
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
										style={{border: 'none'}}
										className={classnames({ 'Dashb-tab-active': this.state.activeTab === '3' })}
										onClick={() => { this.toggle('3'); }}
										>
											Moar Tabs
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
										style={{border: 'none'}}
										className={classnames({ 'Dashb-tab-active': this.state.activeTab === '4' })}
										onClick={() => { this.toggle('4'); }}
										>
											Moar Tabs
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
										style={{border: 'none'}}
										className={classnames({ 'Dashb-tab-active': this.state.activeTab === '5' })}
										onClick={() => { this.toggle('5'); }}
										>
											Moar Tabs
										</NavLink>
									</NavItem>
								</Nav>
								<TabContent activeTab={this.state.activeTab}>
								<TabPane tabId="1">
									<Row>
										<Col sm="12">
											<h4>Tab 1 Contents</h4>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId="2">
									<Row>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									</Row>
								</TabPane>
								<TabPane tabId="3">
									<Row>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									</Row>
								</TabPane>
								<TabPane tabId="4">
									<Row>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									</Row>
								</TabPane>
								<TabPane tabId="5">
									<Row>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									<Col sm="6">
										<Card body>
										<CardTitle>Special Title Treatment</CardTitle>
										<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
										<Button>Go somewhere</Button>
										</Card>
									</Col>
									</Row>
								</TabPane>
								</TabContent>
						</LegoCard>
					</Col>
					<Col md={12} style={{padding:0, marginTop: 50}}>
						<LegoCard>
							<OauthLogin
								buttonText="Refresh Github Token"
								clientId = "3c9756a2ed212663d418"
								redirectUri = ""
								authorizeUrl="https://github.com/login/oauth/authorize"
								onSuccess={this.githubSuccess}
								onFailure={this.githubFailure}
							/>
						</LegoCard>
					</Col>
				</Col>
				</Row>
			</Container>
			</Col>
		)
	}
}

let style = {
	marginTop: '20px'
}
export default withRouter(Scene);