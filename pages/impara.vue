<script setup>
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
      <template v-slot:desc>Tutto ciò che può servirti è già qui!</template>
    </LandingSectionhead>
    <LandingImpara></LandingImpara>
    <p class="text-align-left mt-2">
      Questa sezione è pensata per metterti in condizioni di diventare un utente
      esperto e sicuro nel mondo Bitcoin.
    </p>
	
	
	<div class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-4">
    <div v-for="item of features" class="flex gap-4 items-start">
      <!-- <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div> -->
      <NuxtLink :href="item.url" styleName="inverted">
        <div class="border-2 border-[#D8DEE9] border-opacity-50 rounded-md p-4">
          <div>
            <img
              :src="item.img"
              :width="580"
              :height="580"
              format="avif"
              alt="dove"
              class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
            />
          </div>
          <p v-if="item.description" class="text-slate-500 mt-2 leading-relaxed text-left">
            {{ item.description }}
          </p>
          <div class="p-4 rounded mt-6 bg-black text-white text-center">
            {{ item.title }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>


  </LandingContainer>
</template>