import React from 'react';
import useCharacterItem from "../hooks/useCharacterItem";
import {useParams} from "react-router-dom";

const CharactersItem = () => {
	const {id} = useParams();
	
	const {data, error, loading} = useCharacterItem(id);

	if (error) {
		return <div className={'error'}>{error.message}</div>;
	}
	
	if (loading) {
		return <div className={'loading'}>Loading...</div>;
	}
	
	return (
		<div key={data.character.id} className={'character'}>
			<img src={data.character.image} alt={data.character.name}/>
			<p>{data.character.name}</p>
		</div>
	);
};

export default CharactersItem;