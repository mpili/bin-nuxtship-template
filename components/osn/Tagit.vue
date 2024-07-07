<script>
import osmTagTranslations from "~/assets/osm-tag-translations_it.json";

export default {
  props: {
    icona: {
      type: String,
      required: false,
    },
    etichetta: {
      type: String,
      required: true,
    },
    tags: {
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  methods: {
    getTraduciTagit(tag, value) {
      const tagKey = "tag:" + tag + (value ? "=" + value : "");
      const fallback = tag + (value ? ":" + value : "");
      const translation = osmTagTranslations[tagKey];
      return translation?.message || fallback; // Fallback to tagKey if not found
    },
  },
};
</script>

<template>
  <div v-if="tags[tag]">
    <div class="flex items-center gap-1 my-2">
      <Icon v-if="icona" :name="icona" size="16" color="gray" />
      <span class="text-gray-400 w-48">{{ etichetta }}&nbsp;</span>
      <span class="text-gray-800">{{
        getTraduciTagit(tag, tags[tag])
      }}</span>
    </div>
  </div>
</template>
