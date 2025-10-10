<script setup>

// Cerca tutte le relazioni con i tag specificati all'interno dell'area definita
// const areaItalia ='area["ISO3166-1"="IT"]->.searchArea'

// const url_api = useOverpass(useOverpassadminloc("365331", "4"));

// const { pending, data, error } = await useLazyFetch(url_api, {
//   lazy: true,
//   server: false,
// });

import regioni from "~/assets/data/regioni.json";

definePageMeta({
  layout: "main",
});

</script>

<template>
	<LandingContainer>
		<!-- 
			<div v-if="pending">
				<UiSkeleton />
			</div>
			<div v-else>
			-->
			<!-- <div v-for="regione in data?.elements" :key="regione.id"> -->


		<ul class="list bg-base-100 rounded-box shadow-md">
			<li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Regioni</li>
			
			<li  v-for="regione in regioni.elements" :key="regione.id" class="list-row">
				<div><img class="size-10 rounded-box" src="https://placehold.co/94"/></div>
				<div>
					<NuxtLink :to="`/regione/${regione.id}`">
						<RegioniScheda :regione="regione" />
					</NuxtLink>		
				</div>
			</li>
		</ul>

			<!-- </div> -->
	</LandingContainer>
</template>