<script setup>
const features = [
  {
    title: "Dove usare Bitcoin",
    url: "/spendere/spendere",
    description:
      "Scopri luoghi e servizi in Italia che accettano Bitcoin, permettendoti di vivere l'esperienza dell'economia digitale decentralizzata.",
    icon: "bx:bxs-window-alt",
    img: "/img/features/dove.jpg",
  },
  {
    title: "Comunità",
    url: "/comunita",
    description:
      "Appassionati, professionisti e innovatori che condividono la passione per Bitcoin, promuovendo conoscenza e adozione sul territorio.",
    icon: "bx:bxs-briefcase",
    img: "/img/features/comunita.jpg",
  },
  {
    title: "Formazione",
    url: "/formazione",
    description:
      "Percorsi formativi progettati per trasformarti in un utente esperto e sicuro nel mondo Bitcoin, dalle basi ai concetti più avanzati.",
    icon: "bx:bxs-data",
    img: "/img/features/formazione.jpg",
  },
  {
    title: "Eventi, meetup, conferenze",
    url: "/eventi",
    description:
      "Calendari dei meet-up Bitcoin, delle conferenze Bitcoin in Italia, eventi organizzati da associazioni, scuole e istituzioni che accettano Bitcoin.",
    icon: "bx:bxs-file-find",
    img: "/img/features/eventi.jpg",
  },

  {
    title: "Documentazione",
    url: "/documentazione",
    description:
      "Fornire le basi essenziali per i nuovi bitcoiner e contenuti avanzati per i più esperti. Qui troverai risorse utili e informazioni fondamentali.",
    icon: "bx:bxs-bot",
    img: "/img/features/documentazione.jpg",
  },
  {
    title: "Business",
    url: "/psp",
    description:
      "PSP Payment service provider. Gli operatori italiani che offrono servizi alle aziende che vogliono adottare bitcoin come mezzo di pagamento.",
    icon: "bx:bxs-user",
    img: "/img/features/business.jpg",
  },
];
</script>

<template>
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
</template>
