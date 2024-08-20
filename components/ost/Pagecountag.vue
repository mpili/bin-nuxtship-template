<script>
export default {
  props: {
    tipo: {
      type: String,
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
  <div class="flex flex-wrap py-1">
    <div>
      <a
        :href="`/ost/${tipo}/${tag[tipo]}`"
        class="text-blue-600 pl-2"
        target="_blank"
      >
        <OsnTraducitag :tag="tipo" :value="tag[tipo]" />
      </a>
    </div>

    <div class="bg-blue-100 text-blue-600 text-xs rounded-full py-1 px-2 mx-2">
      {{ tag.count }}
    </div>
  </div>
</template>