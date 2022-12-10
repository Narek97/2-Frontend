import React, {useCallback, useMemo, useState} from 'react';
import ChildFive from "./ChildFive";


const ParentFour = () => {
	
	const [count, setCount] = useState(0);
	const [name, setName] = useState('user');
	
	
	const memoPerson = useMemo(() => {
		return {
			fName: 'Brice',
			lName: 'Wayne'
		};
	}, []);
	
	const handleClick = useCallback(() => {
	}, []);
	
	console.log('ParentFour render');
	
	return (
		<div>
			<button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
			<button onClick={() => setName('new user')}>Change name</button>
			<ChildFive name={name} person={memoPerson} handleClick={handleClick}/>
		</div>
	);
};

export default ParentFour;