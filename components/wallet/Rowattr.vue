<script>
export default {
  props: {
    att: {
      required: false
    },
	data: {
      required: true
    }
  }
}
</script>

<template>
	<tr v-if="data[att.campo]=='s'" class="border-b border-gray-200">
		<td>
			<Icon :name="att.icona" size="16" :color="att.colore" />
		</td>
		<td>
			<span v-if="att.dizionario" class="text-blue-600">
				<a :href="'https://shrill-water-3846.on.fleek.co/'+att.dizionario+'.html'" target="_blank">
					{{ att.titolo }}
				</a>
			</span>
			<span v-else>{{ att.titolo }}</span>
		</td>
		<td>
			<span class="text-gray-500">{{ att.descrizione }}</span>
		</td>
	</tr>
</template>
