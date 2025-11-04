<script setup>
import { computed } from 'vue';

const props = defineProps(["items"]);

const sortedItems = computed(() => {
  const list = Array.isArray(props.items) ? [...props.items] : [];
  return list.sort((a, b) => {
    const na = (useTagsnameit(a?.tags) || '').toLowerCase();
    const nb = (useTagsnameit(b?.tags) || '').toLowerCase();
    return na.localeCompare(nb);
  });
});
</script>

<template>
    <div class="flex flex-wrap">
        <RegioneScheda
            class="m-2"
            v-for="item in sortedItems"
            :data="item"
            :key="item.id || item.slug || item.name"
        />
    </div>
</template>
