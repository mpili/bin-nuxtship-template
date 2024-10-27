import osmTagTranslations from "~/assets/data/osm-tag-translations_it.json";

export function useTagtraduciit(tag, value = null) {
	tag = tag.replace(/^\"|\"$/g, '');
	let tagKey;

	if (value === null) {
		tagKey = "tag:" + tag;
	} else {
		value = value.replace(/^\"|\"$/g, '');
		tagKey = ("tag:" + tag + (value === "x" ? "" : "=" + value));
	}
	const translation = osmTagTranslations[tagKey];
	return translation?.message || (value ?? tagKey); // Fallback to tagKey if not found
}
