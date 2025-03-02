<script setup>
useHead({
  title: "Bitcoin Italia Network - spendere",
});

definePageMeta({
  layout: "main",
});

const spendere = [
  {
    nome: "Mangiare",
    url: "/spendere/mangiare",
  },
  {
    nome: "Alloggiare",
    url: "/spendere/alloggi",
  },

];

const featured_ids = [3217327590, 150411517, 4736077722];

</script>
<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Spendere</template>
    </LandingSectionhead>
    <OsnFeatured :ids="featured_ids" />
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div class="mx-auto max-w-md">
        <ul class="space-y-4">
          <li v-for="spendere of spendere" class="flex items-center">
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
                :href="spendere.url"
                class="flex lg:px-3 py-2"
                target="_blank"
              >
                {{ spendere.nome }}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </LandingContainer>	
</template>
