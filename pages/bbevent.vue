<script setup>
useHead({
  title: "Eventi | Bitcoin Italia Network",
  meta: [
    {
      name: "description",
      content:
        "Il calendario degli appuntamenti, incontri e meetup dei bitcoiner.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/eventi",
    },
  ],
});

definePageMeta({
  layout: "main",
});


const breadcrumb = computed(() => [
  {
    label: "eventi",
  },
]);

const url_api =
  "https://api.bitcoinbeer.events/api/read_events.php?api_key=1190014a4418d774646c93a41861785a638bb921bc7cd2785c5c46802d1676ae";

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Eventi</template>
      <template v-slot:desc
        >Il calendario degli incontri dei Bitcoiner.</template
      >
    </LandingSectionhead>

    <LandingBreadcrumb :voci="breadcrumb" />

    <!-- <EventiPage /> -->

    <div v-if="pending">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <div v-else>
      <div v-for="evento in data" class="py-4">
        <UiEvent
          :event="{
            date: evento?.event_date,
            title: evento.title,
            image: evento.locandina,
            description: evento.venue,
            location: evento.address,
            city: evento?.city,
          }"
        />
        <!-- <h2>{{ evento.title }}</h2>
        <p>id: {{ evento.id }}, tag: {{ evento.tag }}</p>
        <p>{{ evento.description }}</p>
        <p>{{ evento.event_date }}</p>
        <p>{{ evento.venue }}</p>
        <p>{{ evento.address }}</p>
        <p>{{ evento.locandina }}</p>
        <p>{{ evento.guest }}</p>
        <p>
          latitude: {{ evento.latitude }}, longitude: {{ evento.longitude }}
        </p> -->

      </div>
      <!-- {{ data }} -->
    </div>
  </LandingContainer>
</template>
