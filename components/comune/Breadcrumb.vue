<script setup>
import province from "~/assets/data/province.json";
import regioni from "~/assets/data/regioni_id.json";

const props = defineProps(["comune"]);

const provincia = province[props.comune.idprovincia]
const provincianame = provincia['name']

const provinciaidregione = provincia['idregione']

const regione = regioni[provinciaidregione]

const breadcrumb = computed(() => [
	{
		label: "Regioni",
		path: "/regioni",
	},
	{
		label: regione['name'],
		path: "/regione/"+regione['slug'],
	},
	{
		label: 'Provincia di '+provincianame,
		path: '/provincia/'+useSlugify(provincianame),
	},
	{ label: props.comune.name, },
]);
</script>

<template>
	<LandingBreadcrumb :voci="breadcrumb" />
</template>
