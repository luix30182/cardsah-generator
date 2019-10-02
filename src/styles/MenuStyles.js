import styled from 'styled-components';

export const MenuContainer = styled.div`
	@charset "UTF-8";
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: Helvetica, 'Roboto Condensed', sans-serif;
	font-weight: bold;
	width: 100%;
	padding: 20px;

	form {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
	}

	input[type='text'] {
		font: 16px/30px 'Helvetica', sans-serif;
		color: #333;
		width: 60%;
		box-sizing: border-box;
		letter-spacing: 1px;
	}

	.effect-1 {
		border: 0;
		padding: 7px 0;
		border-bottom: 1px solid #ccc;
	}

	.effect-1 ~ .focus-border {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: #4caf50;
		transition: 0.4s;
	}
	.effect-1:focus ~ .focus-border {
		width: 100%;
		transition: 0.4s;
	}

	button {
		border: 4px solid #3f3f3f;
		color: #3f3f3f;
		font-size: 20px;
		font-family: Helvetica, 'Roboto Condensed', sans-serif;
		font-weight: bold;
		line-height: 30px;
		margin-top: 5px;
		margin-left: 20px;
		width: 30%;
		padding: 50px auto;
		text-decoration: none;
	}
	button:hover {
		background-color: #3f3f3f;
		-webkit-transition: background-color 200ms linear;
		-ms-transition: background-color 200ms linear;
		transition: background-color 200ms linear;
		color: #fff;
	}

	input[type='radio'] {
		font-size: 20px;
		width: 1em;
		margin: 0;
		color: inherit;
		outline: none;
		font-family: 'Helvetica';
		transition: 300ms ease-out;
	}

	label input[type='radio']:checked::after {
		font-weight: 900;
	}
	input[type='radio']:active {
		-webkit-transform: scale(0.6);
		transform: scale(0.6);
	}
`;
