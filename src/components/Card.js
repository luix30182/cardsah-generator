import React from 'react';
import { CardWrapper, CardContent } from '../styles/CardStyles';
import { formatTextCard } from '../utils/index';

export const Card = ({ colorCard, textCard }) => {
	const colorContent = colorCard === '#000' ? '#fff' : '#000';
	const text = formatTextCard(textCard);
	return (
		<>
			<CardWrapper color={colorCard}>
				<CardContent color={colorContent}>{text}</CardContent>
			</CardWrapper>
		</>
	);
};
