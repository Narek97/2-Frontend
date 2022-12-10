import React, {memo} from 'react';

const ChildThree = ({children, name}) => {
	const date = new Date();
	console.log('ChildThree rerender');
	return (
		<div>
			{children} {name}. It is currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
		</div>
	);
};

export default memo(ChildThree);