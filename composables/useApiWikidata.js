export function useApiWikidata(brand_wikidata) {
	const apiUrl = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${brand_wikidata}&format=json&props=labels|descriptions&origin=*`;

	return apiUrl;
}