<script setup>
const props = defineProps(["eventi"]);

const showEventi = ref(false)

</script>
<template>
	<div v-if="eventi?.length > 0" >
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        <label class="label">
          <input type="checkbox" class="toggle" v-model="showEventi" />
          eventi passati
        </label>
      </fieldset>
	<ul v-if="showEventi" class="list bg-base-100 rounded-box shadow-md">
		<li  v-for="evento in eventi" :key="evento.id" class="list-row">
		<div><img class="size-10 rounded-box" :src="useEventoImg(evento)"/></div>
			<div>
			<div>{{ useGiornoSettimana(evento.data).substring(0, 3) + '.' + useformattaData(evento.data) }}</div>
			<div class="font-bold">
				<NuxtLink :to="`/evento/${evento.id}`">
				{{ evento.titolo }}
				</NuxtLink>
			</div>
			</div>
		</li>
	</ul> 
	</div>
</template>