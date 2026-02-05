<script setup>
const props = defineProps(["id", "center"]);
const idcomune = props.id;
const oppar = `relation(${idcomune})`;
const url_api = useOverpass(oppar);

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
const selectedValue = ref(10);
</script>
<template>
	<div class="my-6">
		<!-- <UiRivela title="api" :description="url_api" /> -->
		<div v-if="pending">
			<UiSkeleton />
		</div>
		<div v-else>
			<ComunePoisaround
				:daticomune="data"
				:center="data.elements[0].center"
				:km="selectedValue"
				:key="selectedValue"
			/>
			
			<div class="w-full max-w-xs">
				<input type="range" min="10" max="50" v-model.number="selectedValue" class="range range-xs" step="5" />
				<div class="flex justify-between px-2.5 mt-2 text-xs">
					<span>|</span>
					<span>|</span>
					<span>|</span>
					<span>|</span>
					<span>|</span>
				</div>
				<div class="flex justify-between px-2.5 mt-2 text-xs">
					<span>10 km</span>
					<span>20</span>
					<span>30</span>
					<span>40</span>
					<span>50 km</span>
				</div>
			</div>
			<!-- <UiRivela title="dati" :description="data.elements[0].center" /> -->
		</div>
		<MainRivelaerror :error="error" />
	</div>
</template>
