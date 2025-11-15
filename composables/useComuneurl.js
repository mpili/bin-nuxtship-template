export function useComuneurl(nomecomune) {
	const id = useComuneid(nomecomune);
	if (id) {
		return `/comune/${id}`;
	}
	return null;
}
