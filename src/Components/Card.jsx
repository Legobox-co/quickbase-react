import React from 'react';
import {Col} from 'reactstrap';

const Card = (props) => {
	return (
		<Col style={{...props.theme,...styles.cardMain}}>
			<div style={styles.cardBody}>
				{props.children}
			</div>
		</Col>
	);
}

const styles = {
	cardMain:{
		backgroundColor: "white",
		boxShadow: "0px 2px 6px -3px",
		padding: "12px",
		borderRadius: 5,
		marginBottom: "15px",
		fontSize: "1.3em",
		minHeight:"40px"
	},
	cardHeader: {
		fontSize: "1em",
		fontFamily: "Segeo-Ui, Sans-serif",
		marginBottom: "15px"
	},
	cardBody: {
		fontSize: "0.7em",
		fontFamily: "Segeo-Ui, Sans-serif"
	}
}

export default Card;