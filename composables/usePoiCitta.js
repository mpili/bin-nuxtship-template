export function usePoiCitta(poi) {
	if (poi.tags["addr:city"]) {
		return poi.tags["addr:city"];
	} else if (poi.tags["contact:city"]) {
		return poi.tags["contact:city"];
	}
	return '';
}
