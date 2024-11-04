<script setup>
useHead({
  title: 'Contattaci | Bitcoin Italia Network',
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/contattaci',
    },
  ],
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
<LandingContainer>
	<LandingSectionhead>
		<template v-slot:title>Contattaci</template>
		<template v-slot:desc>Scrivici: 
		se hai domande, dubbi,
		richieste di aggiornamento, 
		di contatto, proposte,  o necessiti di assistenza, non esitare a contattarci.</template>
	</LandingSectionhead>
	<LandingFormzoho></LandingFormzoho>
	<div>
		<a href="/chisiamo">Chi siamo</a>
	</div>
</LandingContainer>
</template>
