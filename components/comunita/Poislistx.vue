<script setup>
const props = defineProps(["datapois"]);
</script>
<template>
	<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th>Tipo</th>
					<th>Nome</th>
					<th>Via</th>
					<th>Città</th>
				</tr>
			</thead>
			<tbody>
			<tr v-for="poi in datapois" :key="poi.id">
				<td>{{useTipovenue(poi.tags)}}</td>
				<td class="font-bold"><NuxtLink :to="usePoiLink(poi)">{{poi.tags["name"]}}</NuxtLink></td>
				<td>{{usePoiStreet(poi)}}</td>
				<td>{{usePoiCitta(poi)}}</td>
			</tr>
		</tbody>
	  </table>
	</div>
</template>