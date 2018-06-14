import React from 'react';

const Card = (props) => {
	return (
		<div style={{...props.theme,...styles.cardMain}}>
			<div style={styles.cardBody}>
				{props.children}
			</div>
		</div>
	);
}

const styles = {
	cardMain:{
		backgroundColor: "white",
		// boxShadow: "0px 2px 6px -3px",
		border:"1px solid #ededed",
		padding: "12px",
		marginBottom: "15px",
		width: "100%",
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