import React, {useState} from 'react';
import axios from "axios";
import {useQuery} from "react-query";

const fetchColors = (pageNumber) => {
	return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueriesPage = () => {
	
	const [pageNumber, setPageNumber] = useState(1);
	
	const {isLoading, isError, error, data} = useQuery(
		['colors', pageNumber],
		() => fetchColors(pageNumber),
		{
			keepPreviousData: true
		}
	);
	
	if (isLoading) {
		return <h2>loading...</h2>;
	}
	
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	
	return (
		<div>
			{
				data?.data.map(color => <div key={color.id} className={'colors'}>
					<h2>
						{color.id} - {color.label}
					</h2>
				</div>)
			}
			<div>
				<button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>Prev page</button>
				<button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>Next page</button>
			</div>
		</div>
	);
};

export default PaginatedQueriesPage;