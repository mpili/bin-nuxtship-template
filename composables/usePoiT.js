export function usePoislug(poi) {
	if (poi.type === 'node') {
		return '/osn/' + poi.id;
	} else if (poi.type === 'way') {
		return '/osw/' + poi.id;
	} else if (poi.type === 'relation') {
		return '/osr/' + poi.id;
	}
	return '';
}
