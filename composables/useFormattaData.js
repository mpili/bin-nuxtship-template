export function useformattaData(data) {
	const d = new Date(data);
	return d.toLocaleDateString("it-IT");
}
