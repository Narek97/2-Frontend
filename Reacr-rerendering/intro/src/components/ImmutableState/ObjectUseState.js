import React, {useState} from 'react';

const initialState = {
	fName: 'Bruce',
	lName: 'Wayne'
};

const ObjectUseState = () => {
	
	const [person, setPerson] = useState(initialState);
	
	const onButtonClick = () => {
		// person.fName = 'Clark';
		// person.lName = 'Kent';
		// setPerson(person);
		
		const newPerson = {...person};
		newPerson.fName = "Clark";
		newPerson.lName = "Kent";
		setPerson(newPerson);
	};
	
	console.log('ObjectUseState render');
	
	return (
		<div>
			<button onClick={onButtonClick}>{person.fName} {person.lName}</button>
		</div>
	);
};

export default ObjectUseState;