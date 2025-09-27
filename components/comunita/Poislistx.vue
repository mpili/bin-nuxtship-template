<script setup>
const props = defineProps(["datapois"]);
</script>
<template>
	<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th></th>
					<th>indirizzo</th>
				</tr>
			</thead>
			<tbody>
			<tr v-for="poi in datapois" :key="poi.id">
				<td>
					<NuxtLink :to="usePoiLink(poi)">
						<div class="text-xs">{{useTipovenue(poi.tags)}}</div>
						<div class="font-bold">{{poi.tags["name"]}}</div>
					</NuxtLink>
				</td>
				<td>
					<div class="text-xs">{{usePoiStreet(poi)}}</div>
					<div>{{usePoiCitta(poi)}}</div>
				</td>
				<td></td>
			</tr>
		</tbody>
	  </table>
	</div>
</template>