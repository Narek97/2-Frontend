import React from 'react';
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import ArrayUseState from "./components/ImmutableState/ArrayUseState";
import Parent from "./components/ParentChild/Parent";
import ParentOne from "./components/Optimization/ParentOne";
import ChildOne from "./components/Optimization/ChildOne";
import GrandParent from "./components/Optimization/GrandParent";
import ParentTwo from "./components/Optimization/ParentTwo";
import ParentThree from "./components/InCorrectOptimization/ParentThree";
import ParentFour from "./components/InCorrectOptimization/ParentFour";

const App = () => {
	return (
		<div>
			{/*<UseState/>*/}
			{/*<UseReducer/>*/}
			{/*<ObjectUseState/>*/}
			{/*<ArrayUseState/>*/}
			{/*<Parent/>*/}
			{/*------------*/}
			{/*<ParentOne>*/}
			{/*	<ChildOne/>*/}
			{/*</ParentOne>*/}
			{/*<GrandParent/>*/}
			{/*-------*/}
			{/*<ParentTwo/>*/}
			{/*-------*/}
			{/*<ParentThree/>*/}
			{/*-------*/}
			<ParentFour/>
		</div>
	);
};

export default App;