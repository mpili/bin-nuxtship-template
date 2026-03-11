<script setup>
import province from "~/assets/data/province.json";
import regioni from "~/assets/data/regioni_id.json";

const props = defineProps(["comune"]);

const provincia = props.comune ? province[props.comune.idprovincia] : null;
const provinciaidregione = provincia?.idregione;
const provincianame = provincia?.name || "Provincia";

const regione = provinciaidregione ? regioni[provinciaidregione] : null;

const breadcrumb = computed(() => {
  const items = [
    {
      label: "Regioni",
      path: "/regioni",
    },
  ];

  if (regione) {
    items.push({
      label: regione?.name || "Regione",
      path: "/regione/" + (regione?.slug || ""),
    });
  }

  if (provincia) {
    items.push({
      label: "Provincia di " + provincianame,
      path: "/provincia/" + useSlugify(provincianame),
    });
  }

  items.push({ label: props.comune?.name || "Comune" });

  return items;
});
</script>

<template>
  <LandingBreadcrumb :voci="breadcrumb" />
</template>
