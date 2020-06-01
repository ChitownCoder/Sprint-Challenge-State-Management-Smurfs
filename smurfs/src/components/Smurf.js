import React from 'react';

function Smurf({ data }) {
	return (

<div>
		<ul>
			<h2>Smurf</h2>
			<h5>Name-Id-Age-Height</h5>
			<b> {data.name}</b> {data.id}, {data.age}, {data.height}
		</ul>
</div>

	);
}

export default Smurf;
