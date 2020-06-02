import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

function SmurfList(props) {
	console.log('PROPS: ', props.data);

	useEffect(() => {
		props.getData();
	}, []);

	return (
		<div>
			<ul>
				{props.data.map((item) => (
					<Smurf key={item.id} data={item} />
				))}
			</ul>

			<button onClick={props.getData}>Connect</button>
			<br />
			<SmurfForm getData={props.getData} />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		data: state.data,
	};
}

export default connect(mapStateToProps, { getData })(SmurfList);
