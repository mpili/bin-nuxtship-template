export function useOverpass(pars) {
	return 'https://overpass-api.de/api/interpreter?data=[out:json];'
	+pars
	+";out meta;"
}
