import CharactersList from "./pages/CharactersList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharactersItem from "./pages/CharactersItem";
import Search from "./pages/Search";
import React from "react";
import CreateProduct from "./pages/CreateProduct";

const App = () => {
	
	return (
		<div className={'App'}>
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CharactersList/>}/>
					<Route path={'character/:id'} element={<CharactersItem/>}/>
					<Route path={'search'} element={<Search/>}/>
					<Route path={'create'} element={<CreateProduct/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;