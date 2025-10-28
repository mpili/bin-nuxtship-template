const keys = ['addr:city:it', 'addr:city', 'addr:city:de', 'addr:city:fr'];

export function useAddrcity(tags) {
	for (const key of keys) {
        if (tags[key]) {
            return tags[key];
        }
    }
	return null;
}
