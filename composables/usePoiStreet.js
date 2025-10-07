export function usePoiStreet(poi) {
	if (poi.tags["addr:street"]) {
		return poi.tags["addr:street"];
	} else if (poi.tags["contact:street"]) {
		return poi.tags["contact:street"];
	} else if (poi.tags["addr:place"]) {
		return poi.tags["addr:place"];
	}
	return '';
}
