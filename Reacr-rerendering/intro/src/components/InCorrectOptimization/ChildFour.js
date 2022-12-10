import React, {memo} from 'react';

const ChildFour = ({name}) => {
	console.log('ChildFour render');
	return (
		<div>
			Hello {name}
		</div>
	);
};

export default memo(ChildFour);