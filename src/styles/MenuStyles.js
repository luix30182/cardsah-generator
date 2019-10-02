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


	h1{
		margin:0;
	}
	form {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
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
		background-color: #000;
		transition: 0.4s;
	}
	.effect-1:focus ~ .focus-border {
		width: 100%;
		transition: 0.4s;
	}

	button {
		border: 4px solid #000;
		color: #000;
		font-size: 20px;
		font-family: Helvetica, 'Roboto Condensed', sans-serif;
		font-weight: bold;
		line-height: 30px;
		margin-top: 5px;
		margin-left: 20px;
		width: 30%;
		background-color: #fff;
	}
	button:hover {
		background-color: #000;
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

	@media (max-width: 768px) {
	
		form{
			width: 90%;
			padding: 10px;
		}

		input[type='text'] {
			width: 100%;
		}
		button{
			width: 100%;
			margin-top: 10px;
			margin-left: 0;

		padding: 0;
		}
	  }
`;
