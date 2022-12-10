import React, {useState} from 'react';
import ChildTwo from "./ChildTwo";

const ParentTwo = () => {
	
	const [count, setCount] = useState(0);
	const [name, setName] = useState('user');
	
	console.log('ParentTwo render');
	
	return (
		<div>
			<button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
			<button onClick={() => setName('new user')}>Change name</button>
			<ChildTwo name={name}/>
		</div>
	);
};

export default ParentTwo;