<script setup>

useHead({
  title: 'Categorie di Esercenti che accettano Bitcoin in Italia | Bitcoin Italia Network',
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/categorie',
    },
  ],
});

const url_api  = `/data/poitags_count.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

// this call will be performed server side
// const { data } = await useAsyncData("data", () => $fetch(url_api,));

const breadcrumb = computed(() => [
  {
    label: 'Categorie Esercenti',
  },
]);

definePageMeta({
  layout: "landing",
});
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Categorie Esercenti</template>
		</LandingSectionhead>

		<LandingBreadcrumb :voci="breadcrumb" />
		
		<div v-if="pending">
			Loading ...
		</div>
		<div v-if="data">
			<OstPagecount :data="data" />
		</div>
	</LandingContainer>
</template>
