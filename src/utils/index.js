export const formatTextCard = text => {
	text = text.trim();
	text = text.toLowerCase();
	text = text.charAt(0).toUpperCase() + text.slice(1);
	text = text.replace(/[^,_\sa-z0-9+]+/gi, '');
	text = text.replace(/_/g, '__________');
	text = text + '.';
	return text;
};

export const getColor = color => {
	if (color.toLowerCase() === 'white') {
		return '#fff';
	} else {
		return '#000';
	}
};

export const checkEmpty = p => {
	p = p.replace(/\s/g, "")
	return p;
}
