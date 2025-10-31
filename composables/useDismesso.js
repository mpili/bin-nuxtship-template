export function useDismesso(tags) {
	const myArray = [
		'disused', 'disused:amenity', 'disused:shop',
		'abandoned', 'abandoned:amenity', 'abandoned:shop'
	];

	for (const k of myArray) {
		if (tags[k]) {
			return true;
		}
	}
	return false;
}
