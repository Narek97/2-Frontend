import React from 'react';

const Child = () => {
	console.log('Child rerender');
	return (
		<div>
			Child component
		</div>
	);
};

export default Child;