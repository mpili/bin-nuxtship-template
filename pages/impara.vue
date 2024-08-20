<script setup>

useHead({
  title: "Impara | Bitcoin Italian Network",
});

definePageMeta({
  layout: "landing",
});

const features = [
  {
    title: "Impara da Autodidatta",
    url: "/documentazione",
    // description: "Appassionati, professionisti e innovatori che condividono la passione per Bitcoin, promuovendo conoscenza e adozione sul territorio.",
    img: "/img/impara/autodidatta.png",
  },
  {
    title: "Strumenti di Formazione",
    url: "/formazione",
    // description: "Percorsi formativi progettati per trasformarti in un utente esperto e sicuro nel mondo Bitcoin, dalle basi ai concetti più avanzati.",
    img: "/img/impara/strumenti.png",
  },
  {
    title: "Formazione privata",
    url: "/libriamazon",
    // description: "Calendari dei meet-up Bitcoin, delle conferenze Bitcoin in Italia, eventi organizzati da associazioni, scuole e istituzioni che accettano Bitcoin.",
    img: "/img/impara/privata.png",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Impara Bitcoin</template>
      <template v-slot:desc>Tutto ciò che può servirti è già qui</template>
    </LandingSectionhead>
    <LandingImpara></LandingImpara>
    <p class="text-align-left mt-2">
      Questa sezione è pensata per metterti in condizioni di diventare un utente
      esperto e sicuro nel mondo Bitcoin.
    </p>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-4">
      <div v-for="item of features" class="flex gap-4 items-start">
        <LandingScheda
          :url="item.url"
          :img="item.img"
          :description="item.description"
          :title="item.title"
        ></LandingScheda>
      </div>
    </div>
  </LandingContainer>
</template>