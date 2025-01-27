<script setup>

useHead({
  title: 'I gruppi di meetup Bitcoin in Italia | Bitcoin Italia Network',
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/meetups',
    },
  ],
});

const url_api = `https://bin-dev.pockethost.io/api/collections/meetup/records`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

const breadcrumb = computed(() => [
  {
    label: "comunità",
    path: "/comunita",
  },
  {
    label: "meetup",
  },
]);

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Meetup</template>
      <template v-slot:desc>I meetup italiani.</template>
    </LandingSectionhead>

    <LandingBreadcrumb :voci="breadcrumb" />

    <div v-if="pending">
      Loading
      <Icon name="eos-icons:bubble-loading" size="48" color="gray" />
    </div>
    <div v-else>
      <div v-for="meetup of data.items">
        <MeetupScheda :data="meetup" />
      </div>
    </div>
  </LandingContainer>
</template>
