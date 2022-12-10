import React from 'react';

const ChildOne = () => {
	console.log('ChildOne rerender');
	return (
		<div>
			ChildOne component
		</div>
	);
};

export default ChildOne;