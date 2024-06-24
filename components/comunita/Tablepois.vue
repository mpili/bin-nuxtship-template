<script setup>
defineProps(["data"]);
</script>

<template>
	<section v-if="data.poi.length > 0" class="py-1 bg-blueGray-50">
		<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-6">
			<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
				<div class="block w-full overflow-x-auto">
					<table class="items-center bg-transparent w-full border-collapse ">
						<thead>
							<tr>
								<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
								Nome
								</th>
								<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
									Città
								</th>
								<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
									Indirizzo
								</th>
								<th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
									Tipo
								</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="poi of data.poi" :poi="poi" >
								<th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
									<NuxtLink :to="'/osn/' + poi.id">
										{{poi.tags.name}}
									</NuxtLink>
								</th>
								<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
									<span v-if="poi.tags['addr:city']">{{ poi.tags['addr:city'] }}</span>
								</td>
								<td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									{{ poi.tags['addr:street'] }}<span v-if="poi.tags['addr:housenumber']">,  {{ poi.tags['addr:housenumber'] }}</span>
								</td>
								<td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
									<OsnTipovenue :tags="poi.tags"/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

	</section>
</template>