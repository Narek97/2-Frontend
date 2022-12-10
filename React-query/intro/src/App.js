import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route, Link,
} from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";

const App = () => {
	
	
	const queryClient = new QueryClient();
	
	return (
		<QueryClientProvider client={queryClient}>
			
			<BrowserRouter>
				<nav className={'header'}>
					<ul>
						<li>
							<Link to={'/'}>Home</Link>
						</li>
						<li>
							<Link to={'/infinite'}>Infinite</Link>
						</li>
						<li>
							<Link to={'/pagination'}>Pagination</Link>
						</li>
						<li>
							<Link to={'/rq-dependent'}>Dependent</Link>
						</li>
						<li>
							<Link to={'/rq-dynamic-parallel'}>Dynamic Parallel</Link>
						</li>
						<li>
							<Link to={'/rq-parallel'}>Parallel</Link>
						</li>
						<li>
							<Link to={'/super-heroes'}>Super Heroes</Link>
						</li>
						<li>
							<Link to={'/rq-super-heroes'}>RQ Super Heroes</Link>
						</li>
					</ul>
				</nav>
				<div className={'main'}>
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path="/infinite" element={<InfiniteQueriesPage/>}/>
						<Route path="/pagination" element={<PaginatedQueriesPage/>}/>
						<Route path="/rq-dependent" element={<DependentQueriesPage email={"test@gmail.com"}/>}/>
						<Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroIds={[1, 3]}/>}/>
						<Route path="/rq-parallel" element={<ParallelQueriesPage/>}/>
						<Route path="/super-heroes" element={<SuperHeroesPage/>}/>
						<Route path="/rq-super-heroes" element={<RQSuperHeroesPage/>}/>
						<Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage/>}/>
					</Routes>
				</div>
			
			</BrowserRouter>
			
			<ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
		</QueryClientProvider>
	);
};

export default App;