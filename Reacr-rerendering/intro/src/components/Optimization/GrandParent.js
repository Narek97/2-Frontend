import React, {useState} from 'react';
import ParentOne from "./ParentOne";
import ChildOne from "./ChildOne";

const GrandParent = () => {
	const [newCount, setNewCount] = useState(0);
	return (
		<div>
			<button onClick={() => setNewCount(pr => pr + 1)}>
				Grand Click - {newCount}
			</button>
			<ParentOne newCount={newCount}>
				<ChildOne/>
			</ParentOne>
		</div>
	);
};

export default GrandParent;