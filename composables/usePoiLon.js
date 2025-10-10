export function usePoiLon(poi) {
	if (poi.center) {
		return poi.center.lon;
	}
	return poi.lon;
}
