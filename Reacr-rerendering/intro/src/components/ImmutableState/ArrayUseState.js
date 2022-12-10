import React, {useState} from 'react';

const initialState = ['Bruce', 'Wayne'];

const ArrayUseState = () => {
	const [persons, setPersons] = useState(initialState);
	const handleClick = () => {
		// persons.push('Clark');
		// persons.push('Kent');
		// setPersons(persons);
		const newPersons = [...persons]
		newPersons.push('Clark');
		newPersons.push('Kent');
		setPersons(newPersons);
	};
	
	console.log('ArrayUseState rerender');
	
	return (
		<div>
			<button onClick={handleClick}>Click</button>
			{
				persons.map(person => <div key={person}>{person}</div>)
			}
		</div>
	);
};

export default ArrayUseState;