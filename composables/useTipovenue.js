export function useTipovenue(tags) {
    const tagsPriority = [
      "amenity",
      "leisure",
      "shop",
      "office",
      "tourism",
      "healthcare",
      "craft",
      "industrial",
      "club",
    ];
	for (const tag of tagsPriority) {
		if (tags[tag]) {
			return useTagtraduciit(tag, tags[tag]);
		}
	}
	return 'Altro';
}
