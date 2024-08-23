<script setup>
definePageMeta({
  layout: "landing",
});

const mappe = [
	{
		nome: "Coinmap it",
		titololink: "coinmap.it",
		url: "https://coinmap.it/",
		img: "/img/dove/coinmap_it1000x420.png",
	},
	{
		nome: "BTC Map",
		titololink: "btcmap.org",
		url: "https://btcmap.org/map",
		img: "/img/dove/btcmap_org1000x420.png",
	},
	{
		nome: "Qui Bitcoin",
		titololink: "quibitcoin.it",
		url: "https://www.quibitcoin.it",
		img: "/img/dove/quibitcoin_it1000x420.png",
	},
	{
		nome: "Map Bitcoin.com",
		titololink: "map.bitcoin.com",
		url: "https://map.bitcoin.com/",
		img: "/img/dove/map_bitcoin_com1000x420.png",
	},
	{
		nome: "Coinmap org",
		titololink: "coinmap.org",
		url: "https://coinmap.org/view/",
		img: "/img/dove/coinmap-org1000x420.png",
	},
	{
		nome: "Aggiungi la tua attività",
		titololink: "Aggiungi la tua attività qui",
		url: "https://forms.zohopublic.eu/bitcoinitalianetwork/form/InserimentoAttivit/formperma/pF37EKjAUOJY4-Hw3dE3iyeC5Pr1lW9NqeME-gVGaww",
		img: "/img/dove/add-your-here1000x420.png",
	},
];

useHead({
  title: "Mappe su altri siti" + " | Bitcoin Italia Network",
  meta: [
	{
	  name: "description",
	  content: "Le mappe su altri siti di esercenti che accettano Bitcoin in Italia.",
	},
  ],
});

</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Dove</template>
			<template v-slot:desc>Le mappe delle attività Bitcoin sul territorio Italiano.</template>
		</LandingSectionhead>

		<LandingMainimg urlimg="/img/features/dove.jpg" />

		<div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
			<LandingDove v-for="item of mappe" :dove="item" />
		</div>
	</LandingContainer>
</template>