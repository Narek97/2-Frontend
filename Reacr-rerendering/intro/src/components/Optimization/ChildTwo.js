import React, {memo} from 'react';

const ChildTwo = () => {
	console.log('ChildTwo rerender');
	return (
		<div>
			ChildTwo component
		</div>
	);
};

export default memo(ChildTwo);