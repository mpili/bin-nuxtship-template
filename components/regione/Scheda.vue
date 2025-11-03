<script setup>
const props = defineProps(["data"]);
const urlimg = useProvinceimgurl(useSlugify(useTagsnameit(props.data.tags)));
</script>
<template>
  <RegioneProvincialink :tags="data.tags">
    <UiCard
    :title="useTagsnameit(data.tags)"
		:imageSrc="urlimg"
	/>
  </RegioneProvincialink>
</template>
