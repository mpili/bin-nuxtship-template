<script setup>

useHead({
  title: 'Eventi | Bitcoin Italia Network',
  meta: [
	{
	  name: "description",
	  content: "Il calendario degli appuntamenti, incontri e meetup dei bitcoiner.",
	},
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/eventi',
    },
  ],
});

definePageMeta({
  layout: "main",
});

const calendari = [
  {
    nome: "Calendario eventi di PlanB Network",
    url: "https://planb.network/it/events",
  },
  {
    nome: "Calendar Bitbo",
    url: "https://calendar.bitbo.io/",
  },
  {
    nome: "Bitcoin Holiday",
    url: "https://bitcoin.holiday/",
  },
];

const breadcrumb = computed(() => [
  {
    label: "eventi",
  },
]);

</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Eventi</template>
      <template v-slot:desc>Il calendario degli incontri dei Bitcoiner.</template>
    </LandingSectionhead>

    <LandingMainimg urlimg="/img/features/eventi.jpg" />

    <LandingBreadcrumb :voci="breadcrumb" />

    <!-- <EventiPage /> -->

    <EventiNextdays />

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div class="mx-auto max-w-md">
        <ul class="space-y-4">
          <li v-for="calendario of calendari" class="flex items-center">
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
                :href="calendario.url"
                class="flex lg:px-3 py-2"
                target="_blank"
              >
                {{ calendario.nome }}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </LandingContainer>
</template>
