<script setup>
definePageMeta({
  layout: "landing",
});
const risorseDocumentazione = [
  {
    nome: "Glossario Bitcoin",
    url: "https://shrill-water-3846.on.fleek.co/",
  },
  {
    nome: "Guide di Atlas 21",
    url: "https://atlas21.com/it/learn-it/",
  },
  {
    nome: "Tutorial PlanB Network",
    url: "https://planb.network/it/tutorials",
  },
  {
    nome: "Guide di Bitcoin24ore",
    url: "https://bitcoin24ore.com/category/guide/",
  },
  {
    nome: "Raccolta documentazioni Mir Liponi",
    url: "https://github.com/mirserena/risorsebitcoin/blob/main/README.md",
  },
  {
    nome: "Corsi PlanB Network",
    url: "https://planb.network/it/courses",
  },  
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Documentazione</template>
      <template v-slot:desc>Le risorse per tenersi sempre aggiornati</template>
    </LandingSectionhead>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div class="mx-auto max-w-md">
        <ul class="space-y-4">
          <li
            v-for="documento of risorseDocumentazione"
            class="flex items-center"
          >
            <svg
              class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            <p class="ml-4">
              <a
                :href="documento.url"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                {{ documento.nome }}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </LandingContainer>
</template>
