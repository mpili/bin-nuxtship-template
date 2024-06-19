<script setup>

const stores = [
	{
		nome: "Su Bitrefill",
		titololink: "Gift Card Amazon.it",
		url: "https://www.bitrefill.com/it/it/gift-cards/amazon_it-italy/",
		img: "/img/store/bitrefill1000x420.png",

	},
	{
		nome: "Su Coinsbee",
		titololink: "Amazon Carta regalo",
		url: "https://www.coinsbee.com/it/gift-cards/e-commerce/amazon/",
		img: "/img/store/coinsbee1000x420.png",
	},
];

</script>

<template>
	<div class="rounded-lg bg-white shadow-2xl px-8 pt-2 pb-8">
		<h2 class="py-4 text-xl font-bold">Come comprare su Amazon pagando in bitcoin</h2>
		<p>
			Anche se Amazon ancora non accetta direttamente i Bitcoin,
			puoi comunque acquistare i tuoi libri preferiti utilizzando la tua criptovaluta preferita. Ecco come fare:
			Acquista una carta regalo Amazon con Bitcoin da uno dei seguenti store,
			una volta ricevuta la carta regalo, puoi utilizzarla per acquistare qualsiasi libro su Amazon.it.
		</p>
		<div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
			<LandingStore v-for="item of stores" :store="item" />
		</div>
	</div>
</template>