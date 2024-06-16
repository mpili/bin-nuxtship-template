<script setup>
defineProps(["data"]);
</script>

<template>
	<LandingSectionhead>
      <template v-slot:title>{{ data.tags.name }}</template>
      <template v-slot:desc>{{ data.tags['amenity'] }}</template>
    </LandingSectionhead>

	<div class="py-8">
		<LMap
			style="height:250px"
			:zoom="18"
			:center="[data.lat, data.lon]"
			:use-global-leaflet="false"
		>
			<LTileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
				layer-type="base"
				name="OpenStreetMap"
			/>
			<LMarker :lat-lng="[data.lat, data.lon]" />
		</LMap>
	</div>

	<OsnTag etichetta="Descrizione" :testo="data.tags.description" />

	<div>
		<h2>Indirizzo</h2>
		<div class="p-3">
			<p>
				{{ data.tags['addr:street'] }}
				<span v-if="data.tags['addr:housenumber']">,  {{ data.tags['addr:housenumber'] }}</span>
			</p>
			<p>{{ data.tags['addr:postcode'] }} {{ data.tags['addr:city'] }}</p>
		</div>
	</div>
	<OsnTag etichetta="Cell" :testo="data.tags['contact:mobile']" />
	<OsnTag etichetta="Telefono" :testo="data.tags.phone" />
	
	<OsnTag etichetta="Servizio" :testo="data.tags.amenity" />
	
	<OsnTag etichetta="Pagamento con lightning" :testo="data.tags['payment:lightning']" />
	<OsnTag etichetta="Pagamento on-chain" :testo="data.tags['payment:onchain']" />

	<OsnTag etichetta="Shop" :testo="data.tags.shop" />
	<OsnTag etichetta="Leisure" :testo="data.tags.leisure" />
	<OsnTag etichetta="Turismo" :testo="data.tags.tourism" />
	<div v-if="data.tags.website">
		<div class="flex items-center gap-1">
			<span class="text-gray-400 w-48">Sito web: </span>
			<a :href="data.tags.website" target="_blank" class="text-blue-600 text-sm ">{{ data.tags.website }}</a>
		</div>
	</div>
	<OsnTag etichetta="email" :testo="data.tags.email" />
	<OsnTag etichetta="email" :testo="data.tags['contact:email']" />
	<OsnTag etichetta="Data di verifica" :testo="data.tags.check_date" />
	<OsnTag etichetta="Data di verifica" :testo="data.tags['survey:date']" />

	<a :href="'https://www.openstreetmap.org/node/'+ data.id" target="_blank" class="text-blue-600">scheda su openstreetmap</a>
</template>
