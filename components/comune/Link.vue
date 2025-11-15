<script setup>
const props = defineProps(["nome"]);
const slug = useComuneid(props.nome);
</script>
<template>
  <NuxtLink :to="useComuneurl(nome)">
    <slot></slot>
  </NuxtLink>
</template>
