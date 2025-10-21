export function useformattaData(data) {
	if (!data) {
		return '';
	}
	const d = new Date(data);
	return d.toLocaleDateString("it-IT");
}
