import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
`;

export const CardWrapper = styled.section`
    border-radius: 2px;
    height: 200px;
    margin: 1rem;
    width: 150px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 30px
    background-color: ${props => props.color || 'white'}
`;

export const CardContent = styled.p`
	font-size: 16px;
	font-family: Helvetica, 'Roboto Condensed', sans-serif;
	font-weight: bold;
	color: ${props => props.color || 'black'};
	margin: 0;
	word-wrap: break-word;
	text-decortation: none;
`;
