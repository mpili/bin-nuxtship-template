<script setup>
const props = defineProps(["idcomune"]);
import comuni from "~/assets/data/comuni.json";
import province from "~/assets/data/province.json";
import regioni from "~/assets/data/regioni_id.json";

const idprovincia = comuni[props.idcomune].idprovincia;
const provincia = province[idprovincia]
const provincianame = provincia['name']

const provinciaidregione = provincia['idregione']

const regione = regioni[provinciaidregione]

</script>
<template>
	<NuxtLink :to="`/regione/${regione['slug']}`">
    {{regione['name']}}
    </NuxtLink>
    -
	<NuxtLink :to="`/provincia/${useSlugify(provincianame)}`">
    Provincia di {{provincianame}}
    </NuxtLink>
    -	<NuxtLink :to="`/comune/${idcomune}`">
    {{comuni[idcomune].name}}
    </NuxtLink>



</template>