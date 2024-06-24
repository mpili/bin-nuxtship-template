<script setup>

const url_api  = `/data/wallets.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Wallets</template>
			<template v-slot:desc>I wallet per gestire i tuoi fondi.</template>
		</LandingSectionhead>

		<div v-if="pending">
			Loading ...
		</div>
		<div v-else>
			<div v-for="item of data">
				<div class="flex items-center gap-1">
					<div class="w-48">{{ item.nome }}</div>
					<Icon name="mdi:web" size="16" color="blue" />
					<span class="w-20">
						<a :href="item['web site']" target="_blank" class="text-blue-600 text-sm">
							web site
						</a>
					</span>
					<WalletIcona :campo="item['selfcustodial']" icona="material-symbols:key-rounded" colore="green" />
					<WalletIcona :campo="item['custodial']" icona="material-symbols:vpn-key-off" colore="red" />
					<WalletIcona :campo="item['lightning']" icona="ph:lightning" colore="orange" />
					<WalletIcona :campo="item['Android']" icona="material-symbols:android" colore="green" />
					<WalletIcona :campo="item['iOS']" icona="ic:baseline-apple" colore="green" />
					<WalletIcona :campo="item['Windows']" icona="mdi:microsoft-windows" colore="cyan" />
					<WalletIcona :campo="item['MacOS']" icona="iconoir:apple-imac-2021" colore="pink" />
					<WalletIcona :campo="item['Linux']" icona="teenyicons:linux-alt-solid" colore="black" />
					<WalletIcona :campo="item['Web browser']" icona="icon-park-outline:browser-chrome" colore="black" />
				</div>
			</div>
		</div>
	</LandingContainer>
</template>
