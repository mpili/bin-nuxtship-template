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
	},
	icona: {
		type: String,
		required: false
	}
  },
};
</script>

<template>
	<div v-if="valore" class="py-2 text-sm">
		<a :href="'https://walletscrutiny.com/'+device+'/'+valore" target="_blank" class="text-blue-600">
			<button class="flex items-center gap-1 rounded-lg bg-green-500 text-white py-1 px-3">
				<Icon :name="icona" size="26" color="white" /> 
				{{ device }}
			</button>
		</a>
	</div>
</template>
