import React, {useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import {GET_SEARCH_CHARACTERS_LOCATIONS} from "../gql/GET_SEARCH_CHARACTERS_LOCATIONS";



const Search = () => {
	
	const [searchName, setSearchName] = useState('');
	
	const [getSearchCharactersLocations, {data, error, loading}] = useLazyQuery(GET_SEARCH_CHARACTERS_LOCATIONS, {
		fetchPolicy: 'network-only',
		nextFetchPolicy: 'cache-first',
	});
	
	if (error) {
		return <div className={'error'}>{error.message}</div>;
	}
	
	if (loading) {
		return <div className={'loading'}>Loading...</div>;
	}
	
	return (
		<div>
			<input type="tecxt" value={searchName} onChange={e => setSearchName(e.target.value)}/>
			<button onClick={() => getSearchCharactersLocations({
				variables: {
					name: searchName
				},
			})}
			>
				Search
			</button>
			<div>
				{
					data?.characters?.results?.map((character, index) => <div
						key={character.location.id + index}>{character.location.name}</div>)
				}
			</div>
		</div>
	);
};

export default Search;