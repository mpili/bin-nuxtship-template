import osmTagTranslations from "~/assets/data/osm-tag-translations_it.json";

export function useTagtraduciit(tag, value) {
	tag = tag.replace(/^\"|\"$/g, '');
	value = value.replace(/^\"|\"$/g, '');
	const tagKey = ("tag:" + tag + (value === "x" ? "" : "=" + value));
	const translation = osmTagTranslations[tagKey];
	return translation?.message || value; // Fallback to tagKey if not found
}
