const keys = ['name', 'brand', 'operator', 'brand:wikipedia'];

export function useTagsname(tags) {
	for (const key of keys) {
        if (tags[key]) {
            return tags[key];
        }
    }
	return '';
}
