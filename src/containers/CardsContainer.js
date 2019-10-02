import React from 'react';
import { Card } from '../components/Card';
import { CardContainer } from '../styles/CardStyles';
import { getColor } from '../utils/index';
import firebase from '../config/fbConfig';

class CardsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.ref = firebase.firestore().collection('cards');
		this.state = {
			cards: []
		};
		this.unsubscribe = null;
	}

	onCollectionUpdate = querySnapshot => {
		const cards = [];
		querySnapshot.forEach(doc => {
			const { text, color } = doc.data();
			cards.push({
				text,
				color
			});
		});
		this.setState({
			cards
		});
	};

	componentDidMount() {
		this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
	}

	render() {
		return (
			<>
				<CardContainer>
					{this.state.cards.map((card, i) => (
						<Card
							colorCard={getColor(card.color)}
							textCard={card.text}
							key={i}
						/>
					))}
				</CardContainer>
			</>
		);
	}
}

export default CardsContainer;
