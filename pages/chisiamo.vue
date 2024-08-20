<script setup>
// import { useImage } from 'nuxt/image'

useHead({
  title: 'Chi siamo | Bitcoin Italian Network',
});

definePageMeta({
  layout: "landing",
});

const team = [
  {
    name: "Alessandro",
    title: "Chief Disruption Officer",
    avatar: {
      src: "/img/chisiamo/alessandro.png",
      width: 480,
      height: 560,
    },
  },
  {
    name: "Carlo",
    title: "Chief Empathy Officer",
    avatar: {
      src: "/img/chisiamo/carlo.png",
      width: 580,
      height: 580,
    },
  },
  {
    name: "Max",
    title: "Marketing Engineer",
    avatar: {
      src: "/img/chisiamo/max.jpg",
      width: 580,
      height: 580,
    },
  },
  {
    name: "Pietro",
    title: "Networking Lead",
    avatar: {
      src: "/img/chisiamo/pietro.png",
      width: 580,
      height: 580,
    },
  },
  {
    name: "Mauro",
    title: "Decentralization Architect",
    avatar: {
      src: "/img/chisiamo/mauro.png",
      width: 580,
      height: 580,
    },
  },

  {
    name: "TU!",
    title: "unisciti a noi",
    avatar: {
      src: "/img/chisiamo/guyfawkes.png",
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Chi siamo</template>
      <template v-slot:desc>Un team di appassionati.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        BIN Bitcoin Italia Network.
      </h2>
      <div class="text-lg leading-relaxed text-slate-500">
        <p class="my-4">
          Bitcoin Italia Network nasce dall'idea di un gruppo di appassionati di
          Bitcoin con l’obiettivo di creare una rete sul territorio italiano per
          divulgare, supportare e promuovere l’interesse e le competenze
          riguardanti tematiche e servizi legati a Bitcoin.
        </p>
        <p class="my-4">
          L'iniziativa mira a fornire una piattaforma per la condivisione di
          conoscenze, esperienze e risorse, facilitando l'accesso alle
          informazioni e agli strumenti necessari per comprendere e utilizzare
          Bitcoin in modo efficace.
        </p>
        <p class="my-4">
          Attraverso eventi, workshop e attività di formazione, Bitcoin Italia
          Network si propone di rafforzare la comunità italiana di Bitcoin,
          favorendo adozione e innovazione dell'ecosistema Bitcoin italiano.
        </p>
        <p>
          Siamo un team multiculturale europeo proveniente da diverse parti
          d'Italia, da contesti diversi, con esperienze e competenze specifiche
          nel nostro lavoro.
        </p>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
      <!-- {
        team.map((item) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Image
                {...item.avatar}
                format="avif"
                alt="Team"
                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800"> {item.name}</h2>
              <h3 class="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))
      } -->
    </div>
  </LandingContainer>
</template>
