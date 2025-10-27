import comune2id from "~/assets/data/comune2id.json";

export function useComuneid(nomecomune) {
	const slug = useSlugify(nomecomune);
	if (slug in comune2id) {
		return comune2id[slug];
	}
	return null;
}
