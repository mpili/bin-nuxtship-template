export function usePoiLat(poi) {
	if (poi) {
		if (poi?.center) {
			return poi?.center?.lat;
		}
		return poi?.lat;
	}
	return 0;
}
