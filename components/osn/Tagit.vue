<script>
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
  computed: {
    tagValues() {
      return this.tags[this.tag] ? this.tags[this.tag].split(';') : [];
    },
  },
};
</script>

<template>
  <div v-if="tags[tag]">
    <div class="flex items-center gap-1 pt-2">
      <Icon v-if="icona" :name="icona" size="16" color="gray" />
      <span class="text-gray-400 text-sm">{{ etichetta }}&nbsp;</span>
    </div>
    <div class="text-blue-700 font-bold pb-2">
      <div v-for="(value, index) in tagValues" :key="index">
        <OsnTaglink :tag="tag" :valore="value">
          <template v-slot:testo>
            <OsnTraducitag :tag="tag" :value="value" />
          </template>
        </OsnTaglink>
      </div>
    </div>
  </div>
</template>
