import React from 'react';
import axios from "axios";
import {useQuery} from "react-query";

const fetchUserByEmail = (email) => {
	return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesBtChannelId = (channelId) => {
	return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({email}) => {
	
	const {data: user} = useQuery(['email', email], () => fetchUserByEmail(email));
	const channelId = user?.data.channelId;
	const {data: courses} = useQuery(["courses", channelId], () => fetchCoursesBtChannelId(channelId), {
		enabled: !!channelId
	});
	//enabled querin kanchvuma avtomat en jamanak er enabled dashty true lini
	console.log({courses});
	return (
		<div>
		
		</div>
	);
};

export default DependentQueriesPage;