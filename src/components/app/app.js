import React from 'react';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

import "./app.css"

const App = () => {
	return (
		<div>
			<Header/>
			<RandomPlanet/>

			<div className="row col-md-12">
				<div className="col-md-6">
					<ItemList/>
				</div>
				<div className="col-md-6">
					<PersonDetails/>
				</div>
			</div>
		</div>
	);
};
export default App;