<script setup lang="ts">
interface Props {
  href: string;
  icona: string;
  testo: string;
  size?: "md" | "lg";
}

withDefaults(defineProps<Props>(), {
});
</script>

<template>
  <NuxtLink :href="href" rel="noopener" target="_blank">
    <button class="flex flex-row space-x-2 rounded-lg w-32 p-4 border-2 bg-blue-500 text-white font-bold py-3 px-4 items-center">
      <div class="basis-1/3"><Icon :name="icona"/></div>
      <div>{{ testo }}</div>
  	</button>
  </NuxtLink>
</template>
