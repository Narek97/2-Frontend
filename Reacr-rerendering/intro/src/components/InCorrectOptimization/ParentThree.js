import React, {useState} from 'react';
import ChildThree from "./ChildThree";


const ParentThree = () => {
	
	const [count, setCount] = useState(0);
	const [name, setName] = useState('user');
	
	console.log('ParentThree render');
	
	return (
		<div>
			<button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
			<button onClick={() => setName('new user')}>Change name</button>
			{/*<ChildThree name={name}>*/}
			{/*	<strong>Hello</strong>*/}
			{/*</ChildThree>*/}
			<ChildThree name={name}/>
		</div>
	);
};

export default ParentThree;