import React from 'react';
import firebase from '../config/fbConfig';
import { MenuContainer } from '../styles/MenuStyles';
import { checkEmpty } from '../utils/index'

class Menu extends React.Component {
	state = {
		text: '',
		color: 'white'
	};

	handleChange = e => {
		this.setState({
			text: e.target.value
		});
	};

	handleClick = e => {
		e.preventDefault();
		const currentText = document.querySelector('#card').value;

		if (checkEmpty(currentText).length > 0) {
			firebase
				.firestore()
				.collection('cards')
				.add({
					text: this.state.text,
					color: this.state.color
				})
				.then(res => {
					console.log('Carta creada');
					this.setState({
						text: '',
						color: 'white'
					});
					currentText = '';
				})
				.catch(e => {
					console.log(e);
				});
		}
	};

	handleColorChange = e => {
		this.setState({
			color: e.currentTarget.value
		});
	};

	render() {
		return (
			<>
				<MenuContainer>
					<h1>Generador de Cards Against Humanity</h1>
					<form>
						<input
							type="text"
							name="card"
							id="card"
							className="effect-1"
							placeholder="Aqui va el texto de la carta..."
							onChange={this.handleChange}
						/>

						<button onClick={this.handleClick}>Crear</button>
						<p>
							<label htmlFor="white">
								<input
									id="white"
									name="color"
									type="radio"
									value="white"
									checked={this.state.color === 'white'}
									onChange={this.handleColorChange}
								/>
								<span>White Card</span>
							</label>
						</p>
						<p>
							<label htmlFor="black">
								<input
									id="black"
									name="color"
									type="radio"
									value="black"
									checked={this.state.color === 'black'}
									onChange={this.handleColorChange}
								/>
								<span>Black Card</span>
							</label>
						</p>
					</form>
				</MenuContainer>
			</>
		);
	}
}

export default Menu;
