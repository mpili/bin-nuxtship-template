<script setup>
definePageMeta({
  layout: "landing",
});
const podcasts = [
  {
	nome: "Bitcoin Italia Podcast",
	url: "https://bitcoinitaliapodcast.it/podcast/stagione/6",
	img: "/img/podcast/bitcoin_italia_podcast.jpg",
	id: "bitcoin-italia-podcast",
  },
  {
	nome: "Bitcoin Freedom",
	url: "https://fountain.fm/show/GeOiZ3OrPLYBueqcRP7n",
	img: "/img/podcast/bitcoin_freedom.jpg",
  },
    {
	nome: "Il priorato del Bitcoin",
	url: "https://priorato.org/",
	img: "/img/podcast/il_priorato_del_bitcoin.jpg",
  },
  {
	nome: "Arancione Podcast",
	url: "https://fountain.fm/show/412K3pgOYcSg6kPdaVKt",
	img: "/img/podcast/arancione_podcast.jpg",
  },
{
	nome: "Bitcoin d’Asporto",
	url: "https://fountain.fm/show/fvkvDKJntPAGaPSd49rB",
	img: "/img/podcast/bitcoin_d_asporto.jpg",
  },
  {
	nome: "The Bitcoin Theory",
	url: "https://open.spotify.com/show/0ag9gCPszHrvCShHkuKlHp",
	img: "/img/podcast/the_bitcoin_theory.jpg",
  },
  {
	nome: "Cultura Bitcoin",
	url: "https://open.spotify.com/show/4WCmgP4KVYC4nmoqmqUY5D",
	img: "/img/podcast/cultura_bitcoin.jpg",
  },
  {
	nome: "Sicurezza Bitcoin",
	url: "https://fountain.fm/show/5HHVEWLX26FTlvpLr0s5",
	img: "/img/podcast/sicurezza_bitcoin.jpg",
  },
  {
	nome: "Cripto -  Il Sole 24 Ore",
	url: "https://podcast.ilsole24ore.com/serie/cripto-AEC88W9B",
	img: "/img/podcast/cripto.jpg",
  },
]
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Podcast</template>
			<template v-slot:desc>I podcast Bitcoin in Italia</template>
		</LandingSectionhead>
		<div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
			<LandingPodc v-for="item of podcasts" :podc="item" />
		</div>
	</LandingContainer>
</template>
