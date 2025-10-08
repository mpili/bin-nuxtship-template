export function usePoiCitta(poi) {
	return useTagsCitta(poi.tags);
	// if (poi.tags["addr:city"]) {
	// 	return poi.tags["addr:city"];
	// } else if (poi.tags["contact:city"]) {
	// 	return poi.tags["contact:city"];
	// }
	// return '';
}
