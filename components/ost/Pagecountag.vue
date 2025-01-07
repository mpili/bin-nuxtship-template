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
      <NuxtLink
        :href="`/ost/${tipo}/${tag[tipo]}`"
        class="text-blue-600 p-2"
      >
        <OsnTraducitag :tag="tipo" :value="tag[tipo]" />
      </NuxtLink>
    </div>

    <!-- <div class="bg-blue-100 text-blue-600 text-xs rounded-full py-1 px-2 mx-2"> -->
    <div class="badge badge-primary">{{ tag.count }}</div>
  </div>
</template>