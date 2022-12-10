import React, {memo} from 'react';

const ChildFive = ({name, person, handleClick}) => {
	console.log('ChildFive render');
	return (
		<div>
			Hello {name} {person.fName} {person.lName}
			<button onClick={handleClick}>Click</button>
		</div>
	);
};

export default memo(ChildFive);