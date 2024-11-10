<script setup>
useHead({
  title: "PSP Payment Service Provider | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/psp",
    },
  ],
});

definePageMeta({
  layout: "landing",
});

const psp = [
  { nome: "Bitcoin People", url: "/xt/psp/bitcoinpeople" },
  { nome: "Coinbar Pay", url: "/xt/psp/coinbar" },
  { nome: "inbitcoin", url: "/xt/psp/inbitcoin" },
];

const breadcrumb = computed(() => [
  {
    label: "psp payment service provider",
  },
]);

</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>PSP Payment Service Provider</template>
      <template v-slot:desc
        >I sistemi per gestire i pagamenti in Bitcoin</template
      >
    </LandingSectionhead>

    <!-- <LandingMainimg urlimg="/img/features/formazione.jpg" /> -->

	<LandingBreadcrumb :voci="breadcrumb" />

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div class="mx-auto max-w-md">
        <ul class="space-y-4">
          <li v-for="ipsp of psp" class="flex items-center">
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
				<NuxtLink :to="ipsp.url">
					{{ ipsp.nome }}
				</NuxtLink>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </LandingContainer>
</template>
  