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

const attributiWallet = [
{
		campo: "per iniziare",
		icona: "bi:emoji-smile-fill",
		colore: "#D9B600",
		titolo: "Per iniziare",
		descrizione: "Wallet adatto ai principanti",
	},
	{
		campo: "selfcustodial",
		icona: "material-symbols:key-rounded",
		colore: "green",
		titolo: "Self custodial",
		descrizione: "L'utente ha il controllo delle proprie chiavi private",
	},
	{
		campo: "custodial",
		icona: "material-symbols:vpn-key-off",
		colore: "red",
		titolo: "Custodial",
		descrizione: "Le chiavi private sono gestite dal fornitore, l'utente non ha controllo diretto dei propri fondi",
	},
	{
		campo: "lightning",
		icona: "ph:lightning",
		colore: "orange",
		titolo: "Lightning network",
		descrizione: "Supporta transazioni su Lightning Network",
	},
	{
		campo: "Android",
		icona: "material-symbols:android",
		colore: "#A4C639",
		titolo: "Android",
		descrizione: "Disponibile l'app per cellulari Android",
	},
	{
		campo: "iOS",
		icona: "ic:baseline-apple",
		colore: "black",
		titolo: "iOS",
		descrizione: "Disponibile l'app per iPhone e iPad",
	},
	{
		campo: "Windows",
		icona: "mdi:microsoft-windows",
		colore: "#0078D4",
		titolo: "Windows",
		descrizione: "Disponibile l'app per Windows",
	},
	{
		campo: "MacOS",
		icona: "iconoir:apple-imac-2021",
		colore: "#00C6FF",
		titolo: "MacOS",
		descrizione: "Disponibile l'app per mac",
	},
	{
		campo: "Linux",
		icona: "teenyicons:linux-alt-solid",
		colore: "black",
		titolo: "Linux",
		descrizione: "Disponibile l'app per Linux",
	},
	{
		campo: "open source",
		icona: "mdi:github",
		colore: "#181717",
		titolo: "open source",
		descrizione: "Sono disponibili i sorgenti del programma",
	},
	{
		campo: "Coin Control",
		icona: "ph:hand-coins-thin",
		colore: "#181717",
		titolo: "coin control",
		descrizione: "Consente il controllo degli input della transazione",
	},
];

</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Wallet</template>
			<template v-slot:desc>Le applicazioni per gestire i tuoi fondi.</template>
		</LandingSectionhead>

		<div v-if="pending">
			Loading ...
		</div>
		<div v-else>
			<div class="pt-8">
				<div v-for="item of data">
					<div class="flex items-center gap-1">
						<img :src="'/img/wallet/'+item.id+'.png'" class="w-6 h-6" />
						<div class="w-48">
							<NuxtLink :to="'/w/' + item.id" class="text-blue-600">
								{{ item.nome }}
							</NuxtLink>
						</div>
						<WalletIcona v-for="att of attributiWallet"
							:campo="item[att.campo]"
							:icona="att.icona"
							:colore="att.colore"
						/>

					</div>
				</div>
			</div>
			
			<div>
				<h2 class="text-2xl font-bold leading-7 sm:text-3xl sm:tracking-tight py-4 pt-8">
					Legenda
				</h2>
				<div class="divide-y divide-gray-300/50">
					<div v-for="att of attributiWallet"  class="flex items-center gap-1 ">
						<div class="flex items-center gap-4">
							<Icon :name="att.icona" size="16" :color="att.colore" />
							<span class="text-gray-800 w-36">{{ att.titolo }}</span>
							<span class="text-gray-500">{{ att.descrizione }}</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	</LandingContainer>
</template>
