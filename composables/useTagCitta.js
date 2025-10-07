const keys = ['contact:city', 'addr:city', 'addr:city:it', 'addr:city:de', 'addr:city:fr'];

export function useTagsCitta(tags) {
	for (const key of keys) {
        if (tags[key]) {
            return tags[key];
        }
    }
	return '';
}
