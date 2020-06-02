import React, { useState } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

function SmurfForm(props) {
	const [name, setName] = useState('Tom');
	const [age, setAge] = useState(7);
	const [height, setHeight] = useState(6);
	const [id, setId] = useState(9455869);

	const handleChangeName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};
	const handleChangeAge = (e) => {
		e.preventDefault();
		setAge(e.target.value);
	};
	const handleChangeHeight = (e) => {
		e.preventDefault();
		setHeight(e.target.value);
	};
	const handleChangeId = (e) => {
		e.preventDefault();
		setId(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newState = {
			name: name,
			age: age,
			height: `${height}cm`,
		};
		handlePost(newState);
		setName('');
		setAge(0);
		setHeight(0);
	};

	function handlePost(data) {
		axios
			.post('http://localhost:3333/smurfs', data)
			.then(function (response) {
				props.getData();
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleChangeName}
				/>
			</label>

			<label>
				Height:
				<input
					type="number"
					name="height"
					value={age}
					onChange={handleChangeAge}
				/>
			</label>

			<label>
				Age:
				<input
					type="number"
					name="age"
					value={height}
					onChange={handleChangeHeight}
				/>
			</label>
			{/* <label>
				ID (Leave blank to add Smurf):
				<input type='number' name='id' value={id} onChange={handleChangeId} />
			</label> */}
			<button type="submit">Add Smurf</button>
		</form>
	);
}

function mapStateToProps(state) {
	return {
		data: state.data,
	};
}

export default connect(mapStateToProps, {})(SmurfForm);
