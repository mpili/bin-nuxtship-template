<script setup>
defineProps(["data"]);
</script>

<template>
  <div
    v-for="tipo of [
      'amenity',
      'shop',
      'cuisine',
      'office',
      'tourism',
      'craft',
      'healthcare',
      'leisure',
      'sport',
    ]"
  >
    <h2 class="text-2xl font-bold pt-4 pb-2">
      {{ tipo }}
    </h2>
    <div v-for="tag of data[tipo]">
      <span class="font-bold pr-2">{{ tag.count }}</span>
      <a :href="`/ost/${tipo}/${tag[tipo]}`" class="text-blue-500 pr-2">
        {{ tag[tipo] }}
      </a>
      <OsnTraducitag :tag="tipo" :value="tag[tipo]" />
      <a :href="`https://wiki.openstreetmap.org/wiki/Tag:${tipo}=${tag[tipo]}`" class="text-blue-500">
        wiki
      </a>
    </div>
  </div>
</template>