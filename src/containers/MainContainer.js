import React from 'react';
import Menu from '../components/Menu';
import CardContainer from './CardsContainer';

class MainContainer extends React.Component {
	render() {
		return (
			<>
				<Menu />
				<CardContainer />
			</>
		);
	}
}

export default MainContainer;
