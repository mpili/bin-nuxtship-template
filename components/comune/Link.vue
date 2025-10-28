<script setup>
const props = defineProps(["nome"]);
const slug = useComuneid(props.nome);

</script>
<template>
	<NuxtLink :to="'/comune/' + useComuneid(nome)">
	<slot></slot>
  </NuxtLink>
</template>
