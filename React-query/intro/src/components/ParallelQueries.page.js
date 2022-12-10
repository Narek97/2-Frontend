import React from 'react';
import axios from "axios";
import {useQuery} from "react-query";

const ParallelQueriesPage = () => {
	
	const fetchSuperHeroes = () => {
		return axios.get('http://localhost:4000/superheroes');
	};
	
	const fetchFriends = () => {
		return axios.get('http://localhost:4000/friends');
	};
	
	const {data: heroesData} = useQuery('super-heroes', fetchSuperHeroes);
	const {data: heroesFriendsData} = useQuery('super-heroes-friends', fetchFriends);
	
	console.log({heroesData});
	console.log({heroesFriendsData});
	return (
		<div>
			ParallelQueriesPage
		</div>
	);
};

export default ParallelQueriesPage;