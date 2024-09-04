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
};
</script>

<template>
  <div v-if="tags[tag]">
    <OsnTaglink :tag="tag" :valore="tags[tag]" >
      <template v-slot:testo>
      <div class="flex items-center gap-1 pt-2">
        <Icon v-if="icona" :name="icona" size="16" color="gray" />
        <span class="text-gray-400 text-sm">{{ etichetta }}&nbsp;</span>
      </div>
      <div class="text-gray-800 pb-2">
        <OsnTraducitag :tag="tag" :value="tags[tag]" />
      </div>
    </template>
    </OsnTaglink>
  </div>
</template>
