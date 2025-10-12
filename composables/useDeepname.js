export function useDeepname(data) {
	if (data) {
		if (data.name) {
			return data.name;
		}
		if (data.tags) {
			return useTagsnameit(data.tags);
		}
		if (data.elements && data.elements.length > 0) {
			for (const el of data.elements) {
				if (el.tags) {
					return useTagsnameit(el.tags);
				}
				if (el.name) {
					return el.name;
				}
			}
		}
	}
	return '';
}
