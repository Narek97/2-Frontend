import React from 'react';
import '../App.css';
import useCharacters from "../hooks/useCharacters";
import {useNavigate} from "react-router-dom";

const CharactersList = () => {
	
	const navigate = useNavigate();
	
	const {data, error, loading} = useCharacters();
	
	if (error) {
		return <div className={'error'}>{error.message}</div>;
	}
	
	if (loading) {
		return <div className={'loading'}>Loading...</div>;
	}
	
	
	return (
		<>
			<div className={'characters'}>
				{
					data.characters.results.map(character =>
						<div key={character.id} onClick={() => navigate(`/character/${character.id}`)}
						     className={'characters-item'}>
							<img src={character.image} alt={character.name}/>
							<p>{character.name}</p>
						</div>)
				}
			</div>
		
		</>
	
	);
};

export default CharactersList;