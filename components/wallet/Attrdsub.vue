<script>
export default {
  props: {
    att: {
      required: true,
    },
  },
};
</script>

<template>
	<div class="object-center">
		<Icon :name="att.icona" size="32" :color="att.colore" />
	</div>
    <div>
      <p class="text-base-content">{{ att.titolo }}</p>
      <p class="text-neutral text-sm">{{ att.descrizione }}</p>
    </div>
</template>
