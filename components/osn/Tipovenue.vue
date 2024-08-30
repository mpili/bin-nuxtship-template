<script setup>
import osmTagTranslations from "~/assets/data/osm-tag-translations_it.json";

defineProps(["tags"]);

const getTranslationit = (tag, value) => {
  const tagKey = "tag:" + tag + (value ? "=" + value : "");
  const fallback = tag + (value ? ":" + value : "");
  const translation = osmTagTranslations[tagKey];
  return translation?.message || fallback; // Fallback to tagKey if not found
};
</script>

<template>
  <span v-if="tags.amenity">
    {{ getTranslationit("amenity", tags.amenity) }}
  </span>
  <span v-else-if="tags.leisure">
    {{ getTranslationit("leisure", tags.leisure) }}
  </span>
  <span v-else-if="tags.shop">
    {{ getTranslationit("shop", tags.shop) }}
  </span>
  <span v-else-if="tags.office">
    {{ getTranslationit("office", tags.office) }}
  </span>
  <span v-else-if="tags.tourism">
    {{ getTranslationit("tourism", tags.tourism) }}
  </span>
  <span v-else-if="tags.healthcare">
    {{ getTranslationit("healthcare", tags.healthcare) }}
  </span>
  <span v-else-if="tags.craft">
    {{ getTranslationit("craft", tags.craft) }}
  </span>
  <span v-else-if="tags.industrial">
    {{ getTranslationit("industrial", tags.industrial) }}
  </span>
  <span v-else-if="tags.club">
    {{ getTranslationit("club", tags.club) }}
  </span>
  <span v-else></span>
</template>
