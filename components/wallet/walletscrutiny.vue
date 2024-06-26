<script>
export default {
  props: {
    device: {
      type: String,
      required: false,
    },
    valore: {
      type: String,
      required: true,
    },
	colore: {
		type: String,
		required: false
	}
  },
};
</script>

<template>
	<div v-if="valore" class="py-4">
		<p>
			<a :href="'https://walletscrutiny.com/'+device+'/'+valore" target="_blank" class="text-blue-600">
				walletscrutiny: {{ device }}
			</a>
		</p>
	</div>
</template>
