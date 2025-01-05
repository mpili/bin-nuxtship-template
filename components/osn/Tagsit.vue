<script setup>
const props = defineProps(["tags"]);

const tagItaliani = [
  {
    icona: "material-symbols-light:add-business-outline",
    etichetta: "Strutture di servizio",
    tag: "amenity",
  },
  {
    icona: "material-symbols:fitness-center",
    etichetta: "Tempo libero",
    tag: "leisure",
  },
  {
    icona: "material-symbols:shopping-cart-outline",
    etichetta: "Shop",
    tag: "shop",
  },
  {
    icona: "material-symbols:travel",
    etichetta: "Turismo",
    tag: "tourism",
  },
  {
    icona: "ic:baseline-sports-handball",
    etichetta: "Sport",
    tag: "sport",
  },
  {
    icona: "game-icons:stone-crafting",
    etichetta: "Artigiano",
    tag: "craft",
  },
  {
    icona: "material-symbols-light:add-business-outline",
    etichetta: "Pensione",
    tag: "guest_house",
  },
  {
    icona: "material-symbols-light:health-and-safety-outline",
    etichetta: "Salute",
    tag: "healthcare",
  },
  {
    icona: "fluent-emoji-high-contrast:health-worker",
    etichetta: "Specializzazione",
    tag: "healthcare:speciality",
  },
  {
    icona: "fluent:food-20-regular",
    etichetta: "Cucina",
    tag: "cuisine",
  },
  {
    icona: "icon-park-outline:clothes-crew-neck",
    etichetta: "Abbigliamento",
    tag: "clothes",
  },
  {
    icona: "guidance:office-pod",
    etichetta: "Professionista",
    tag: "office",
  },
];
</script>
<template>
  <OsnTagit
    v-for="i of tagItaliani"
    :icona="i.icona"
    :etichetta="i.etichetta"
    :tag="i.tag"
    :tags="tags"
  />
</template>