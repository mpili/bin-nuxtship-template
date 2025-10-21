<script setup>
const props = defineProps(["idcomune"]);
import comuni from "~/assets/data/comuni.json";
import province from "~/assets/data/province.json";
import regioni from "~/assets/data/regioni_id.json";

const idcomune = props.idcomune;

// if (idcomune > 0) {

	const idprovincia = comuni[idcomune].idprovincia;
	const provincia = province[idprovincia]
	const provincianame = provincia['name']

	const provinciaidregione = provincia['idregione']

	const regione = regioni[provinciaidregione]

	const breadcrumb = computed(() => [
		{
			label: "comunità",
			path: "/comunita",
		},
		// {
		// 	label: "Regioni",
		// 	path: "/regioni",
		// },
		{
			label: regione['name'],
			path: "/regione/"+regione['slug'],
		},
		{
			label: 'Provincia di '+provincianame,
			path: '/provincia/'+useSlugify(provincianame),
		},
		{
			label: comuni[idcomune].name,
			path: '/comune/'+idcomune,
		},
	]);

// }
// else {
// 	const breadcrumb = computed(() => [
// 		{
// 			label: "comunità",
// 		}
// 	]);
// }
</script>

<template>
	<LandingBreadcrumb :voci="breadcrumb" />
</template>
