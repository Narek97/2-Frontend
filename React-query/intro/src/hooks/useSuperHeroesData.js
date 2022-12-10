import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
	return axios.get('http://localhost:4000/superheroes');
};

const addSuperhero = (hero) => {
	return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
	return useQuery(
		'super-heroes',
		fetchSuperHeroes,
		{
			onSuccess,
			onError,
			// select: (data) => {
			// 	const superHeroName = data.data.map(hero => hero.name);
			// 	return superHeroName;
			// }
		});
};

export const useAddSuperheroData = () => {
	const queryClient = useQueryClient() // vor create aneluch heto avtomat get ani usernerin
	return useMutation(addSuperhero,{
		onSuccess:()=>{
			queryClient.invalidateQueries('super-heroes')//super-heroes partadir nuyn key inch verevt useSuperHeroesData i mejiny
		}
	});
};