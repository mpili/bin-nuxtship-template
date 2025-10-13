// Esegue l'output dei risultati.
// 'out center;' calcola il centroide di ogni comune,
// che è il modo più efficace per ottenere una singola coppia di coordinate (lat, lon) per ogni comune.

// out center;

export function useOverpass(pars) {
	return 'https://overpass-api.de/api/interpreter?data=[out:json][timeout:120];'
	+pars
	+ ";out center;" // ";out meta;"
}
