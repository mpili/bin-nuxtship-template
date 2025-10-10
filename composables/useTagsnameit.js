export function useTagsnameit(tags) {
	if (tags['name:it']) {
		return tags['name:it']
	}
	return tags['name'] || ''
}
