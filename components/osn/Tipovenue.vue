<script setup>
defineProps(["tags"]);
</script>

<template>
	<span  v-if="tags.amenity">{{ tags.amenity }} </span>
	<span  v-else-if="tags.leisure">{{ tags.leisure }} </span>
	<span  v-else-if="tags.shop">{{ tags.shop }} </span>
	<span  v-else-if="tags.tourism">{{ tags.tourism }} </span>
	<span  v-else-if="tags.office">{{ tags.office }} </span>
	<span v-else></span>
</template>
