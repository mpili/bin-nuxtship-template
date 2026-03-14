<template>
  <div>
    <select class="select select-xs" v-model="colorMode.preference">
      <option v-for="tema in temi" :key="tema" :value="tema">{{ tema }}</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const temi = [
  "system",
  "light",
  "dark",
  "cyberpunk",
  "retro",
  "bumblebee",
  "cupcake",
  "aqua",
  "pastel",
  "wireframe",
  "night",
  "coffee",
];
</script>
