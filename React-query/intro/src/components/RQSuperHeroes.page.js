// import React from 'react';
// import {useQuery} from "react-query";
// import axios from "axios";
//
// const fetchSuperHeroes = () => {
// 	return axios.get('http://localhost:4000/superheroes');
// };
//
// const RqSuperHeroesPage = () => {
//
// 	const onSuccess = (data) => {
// 		console.log('Perform side effect after data fetching', data);
// 	};
//
// 	const onError = (error) => {
// 		console.log('Perform side effect after encountering fetching', error);
// 	};
//
// 	const {isLoading, data, isError, error, isFetching, refetch} = useQuery(
// 		'super-heroes',
// 		fetchSuperHeroes,
// 		{
// 			// cacheTime: 5000,
// 			// staleTime: 10000,
//
// 			// refetchOnMount: true,
// 			// refetchOnWindowFocus: true
//
// 			// refetchInterval: 3000,
// 			// refetchIntervalInBackground: true
//
// 			// enabled: false,
//
// 			onSuccess,
// 			onError,
// 			// select: (data) => {
// 			// 	const superHeroName = data.data.map(hero => hero.name);
// 			// 	return superHeroName;
// 			// }
//
// 		});
//
// 	//cacheTime: default:0 // vorqan jamanak heto vor ejich gnum enq eji cach arat datan pahi
// 	//staleTime: default:0 // vorqan jamank heto norich get anenq datan, et jananaki yntacqum ete norich het ganq mer ej hin cach datan cuych kta u get chi ani nory
// 	//refetchOnMount: default:true // eji navigatiayi janak het galuch datan get chani ete arden arela
// 	//refetchOnWindowFocus: default:false // windowi focusy ete kori u het ga datan taza get ani
// 	//refetchInterval: default:false // vorqan jamanak heto avtomat datan get ani
// 	//refetchIntervalInBackground: default:false // ete refetchInterval enq dre u brouzery mimiayza arat kam urish eja gnachat  datan et jamankum get chi linum ete dnum enq true ankax amen inchic et jamanky mek datan geta llinum
// 	//enabled: default:true // vore menak click aneluch get ani datan
// 	//
//
//
// 	console.log({isLoading, isFetching});
//
// 	if (isLoading || isFetching) {
// 		return <h2>Loading...</h2>;
// 	}
//
// 	if (isError) {
// 		return <h2>{error.message}</h2>;
// 	}
//
//
// 	return (
// 		<div>
// 			<h2>RQ Super Heroes Page</h2>
// 			<button onClick={refetch}>Fetch heroes</button>
//
// 			{data?.data?.map(hero => {
// 				return <div key={hero.name}>{hero.name}</div>;
// 			})}
//
// 			{/*select ogtagortelu jamanak*/}
// 			{/*{*/}
// 			{/*	data.map(heroName => <div key={heroName}>{heroName}</div>)*/}
// 			{/*}*/}
// 		</div>
// 	);
// };
//
// export default RqSuperHeroesPage;

//use custom query hook
import React, {useState} from 'react';
import {useAddSuperheroData, useSuperHeroesData} from "../hooks/useSuperHeroesData";
import {Link} from "react-router-dom";

const RqSuperHeroesPage = () => {
	
	const [name, setName] = useState('');
	const [alterEgo, setAlterEgo] = useState('');
	
	const onSuccess = (data) => {
		console.log('Perform side effect after data fetching', data);
	};
	
	const onError = (error) => {
		console.log('Perform side effect after encountering fetching', error);
	};
	
	const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroesData(onSuccess, onError);
	
	const {mutate: addHero, isLoading: herIsLoading, isError: heroIsError, errors} = useAddSuperheroData();
	
	const handleAddHeroClick = () => {
		const hero = {name, alterEgo};
		addHero(hero);
	};
	
	
	if (isLoading || isFetching) {
		return <h2>Loading...</h2>;
	}
	
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	
	
	return (
		<div>
			<h2>RQ Super Heroes Page</h2>
			<div>
				<input type="text" value={name} onChange={e => setName(e.target.value)}/>
				<input type="text" value={alterEgo} onChange={e => setAlterEgo(e.target.value)}/>
				<button onClick={handleAddHeroClick}>Add hero</button>
			</div>
			<button onClick={refetch}>Fetch heroes</button>
			
			{data?.data?.map(hero => {
				return <div key={hero.name} className={'hero-link'}>
					<Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
				</div>;
			})}
			{/*{*/}
			{/*	data.map(heroName => <div key={heroName}>{heroName}</div>)*/}
			{/*}*/}
		</div>
	);
};

export default RqSuperHeroesPage;