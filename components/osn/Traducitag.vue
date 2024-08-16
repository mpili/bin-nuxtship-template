<script>
import osmTagTranslations from "~/assets/data/osm-tag-translations_it.json";

export default {
  props: {
    tag: {
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
  },
  methods: {
    getTraduciTagit(tag, value) {
      const tagKey = ("tag:" + tag + (value==="x" ? "" : "=" + value));
      console.log(tagKey);
      const translation = osmTagTranslations[tagKey];
      return translation?.message || value; // Fallback to tagKey if not found
    },
  },
};
</script>

<template>
  <span v-if="value">{{ getTraduciTagit(tag, value) }}</span>
</template>
