<script setup>
import osmTagTranslations from "~/assets/osm-tag-translations_it.json";

defineProps(["tags"]);

const getTranslation = (tag, value) => {
  const tagKey = "tag:" + tag + (value ? "=" + value : "");
  const fallback = tag + (value ? ":" + value : "");
  const translation = osmTagTranslations[tagKey];
  return translation?.message || fallback; // Fallback to tagKey if not found
};
</script>

<template>
  <span v-if="tags.amenity">
    {{ getTranslation("amenity", tags.amenity) }}
  </span>
  <span v-else-if="tags.leisure">
    {{ getTranslation("leisure", tags.leisure) }}
  </span>
  <span v-else-if="tags.shop">
    {{ getTranslation("shop", tags.shop) }}
  </span>
  <span v-else-if="tags.tourism">
    {{ getTranslation("tourism", tags.tourism) }}
  </span>
  <span v-else-if="tags.office">
    {{ getTranslation("office", tags.office) }}
  </span>
  <span v-else-if="tags.healthcare">
    {{ getTranslation("healthcare", tags.healthcare) }}
  </span>
  <span v-else-if="tags.craft">
    {{ getTranslation("craft", tags.craft) }}
  </span>
  <span v-else-if="tags.industrial">
    {{ getTranslation("industrial", tags.industrial) }}
  </span>
  <span v-else-if="tags.club">
    {{ getTranslation("club", tags.club) }}
  </span>
  <span v-else></span>
</template>
