<script setup>
defineProps(["data"]);

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
		dizionario: "open-source"
	},
	{
		campo: "Coin Control",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "coin control",
		descrizione: "Selezione degli UTXO per la transazione",
		dizionario: "coin-selection"
	},
	{
		campo: "Fee Control",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "fee control",
		descrizione: "consente di impostare le fee",
	},
	{
		campo: "Bech32",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "bech32",
		descrizione: "indirizzi bc1",
		dizionario: "bech32"
	},
	{
		campo: "Tor",
		icona: "fluent-emoji-high-contrast:onion",
		colore: "black",
		titolo: "protocollo tor",
		descrizione: "connessioni utilizzando la rete per la privacy tor",
		dizionario: "tor"
	},
	{
		campo: "Testnet",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "testnet",
		descrizione: "coin di test",
		dizionario: "testnet"
	},
	{
		campo: "Multisig",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "multisig",
		descrizione: "transazioni firmate con diverse chiavi",
		dizionario: "multisig"
	},
	{
		campo: "Taproot",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "taproot",
		descrizione: "transazioni con taproot",
		dizionario: "taproot"
	},
	{
		campo: "CoinJoin",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "coinjoin",
		descrizione: "transazioni anonime",
		dizionario: "coinjoin"
	},
	{
		campo: "Payjoin P2EP",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "p2ep",
		descrizione: "Payjoin Pay-to-Endpoint",
		dizionario: "p2ep"
	},
	{
		campo: "Batching",
		icona: "carbon:batch-job",
		colore: "black",
		titolo: "batching",
		descrizione: "combina più pagamenti in un'unica transazione",
		dizionario: "batching"
	},
	{
		campo: "RBF",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "rbf",
		descrizione: "Replace-by-fee",
		dizionario: "rbf"
	},
	{
		campo: "CPFP",
		icona: "typcn:flow-children",
		colore: "black",
		titolo: "cpfp",
		descrizione: "Child pays for parent",
		dizionario: "cpfp"
	},
	{
		campo: "PSBT",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "psbt",
		descrizione: "Partially Signed Bitcoin Transaction",
		dizionario: "psbt"
	},
	{
		campo: "Passphrase",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "passphrase",
		descrizione: "frase opzionale aggiunta alla frase mnemonica",
		dizionario: "passphrase"
	},
	{
		campo: "BIP-32",
		icona: "tabler:hierarchy-3",
		colore: "black",
		titolo: "bip32",
		descrizione: "Hierarchical Deterministic wallet",
		dizionario: "bip-32-hd-wallet"
	},
	{
		campo: "BIP-39",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "bip39",
		descrizione: "frase mnemonica",
		dizionario: "bip-39-mnemonic-phrases"
	},
	{
		campo: "BIP-44",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "bip44",
		descrizione: "Derivation Path standard per indirizzi P2PKH",
		dizionario: "bip-44-derivation-paths-for-p2pkh"
	},
	{
		campo: "BIP-47",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "bip47",
		descrizione: "codici di pagamento riutilizzabili",
		dizionario: "bip-47-reusable-payment-codes-for-hd-wallets"
	},
	{
		campo: "BIP-49",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "bip49",
		descrizione: "derivation path standard per indirizzi Wrapped SegWit",
		dizionario: "bip-49-derivation-paths-for-wrapped-segwit"
	},
	{
		campo: "BIP-85",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "bip85",
		descrizione: "Deterministic Entropy From BIP32 Keychains",
		dizionario: "bip-85-deterministic-entropy-from-bip32-keychains"
	},
	{
		campo: "RAW tx",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "raw tx",
		descrizione: "transazioni in formato RAW",
	},
	{
		campo: "Signing Messages",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "sign message",
		descrizione: "firma di messaggi con la chiave privata",
	},
	{
		campo: "SPV",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "spv",
		descrizione: "Simplified Payment Verification",
		dizionario: "spv"
	},
	{
		campo: "Connessione nodo",
		icona: "ant-design:subnode-outlined",
		colore: "black",
		titolo: "connessione a nodo",
		descrizione: "possibilità di specificare il nodo a cui connettersi",
	},
	{
		campo: "Connessione hardware",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "hw connection",
		descrizione: "connessione a hardware wallet",
		dizionario: "hwi"
	},
	{
		campo: "Miniscript",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "miniscript",
		descrizione: "script bitcoin con sintassi miniscript",
		dizionario: "miniscript"
	},
	{
		campo: "Swap",
		icona: "hugeicons:coins-swap",
		colore: "black",
		titolo: "swap",
		descrizione: "coin swap",
		dizionario: "coinswap"
	},
	{
		campo: "AMP",
		icona: "mdi:map-marker-path",
		colore: "black",
		titolo: "amp",
		descrizione: "Atomic Multipath Payment",
		dizionario: "amp"
	},
	{
		campo: "Wumbo",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "wumbo channel",
		descrizione: "canali Lightning wumbo",
		dizionario: "wumbo-channel"
	},
	{
		campo: "Trampoline payments",
		icona: "hugeicons:trampoline",
		colore: "black",
		titolo: "trampoline",
		descrizione: "Trampoline payment su Lightning",
		dizionario: "trampoline"
	},
	{
		campo: "LNURL",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "lnurl",
		descrizione: "indirizzi lightning tramite LNURL",
		dizionario: "lnurl"
	},
	{
		campo: "LNURL-p",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "LNURL-p",
		descrizione: "LNURL Pay",
	},
	{
		campo: "LNURL-w",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "LNURL-w",
		descrizione: "LNURL Withdraw",
	},
	{
		campo: "Bolt12",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "bolt12",
		descrizione: "offer lightning",
		dizionario: "bolt12"
	},
	{
		campo: "URI Scheme",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "URI Scheme",
		descrizione: "",
	},
	{
		campo: "Submarine swap",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "Submarine Swap",
		descrizione: "swap atomici on-chain off-chain",
		dizionario: "submarine-swap"
	},
	{
		campo: "Connessione nodo",
		icona: "mdi:bitcoin",
		colore: "black",
		titolo: "connessione nodo",
		descrizione: "connessione ad un nodo specifico",
	},
]
const social = [
	{
		nome: "twitter",
		icona: "mdi:twitter",
		url: "https://x.com/",
	},
	{
		nome: "telegram",
		icona: "mdi:telegram",
		url: "https://t.me/",
	},
	{
		nome: "reddit",
		icona: "teenyicons:reddit-outline",
		url: "https://www.reddit.com/r/",
	},
	{
		nome: "facebook",
		icona: "ic:baseline-facebook",
		url: "https://www.facebook.com/",
	},
	{
		nome: "instagram",
		icona: "ph:instagram-logo",
		url: "https://www.instagram.com/",
	},
	{
		nome: "linkedin",
		icona: "mdi:linkedin",
		url: "https://www.linkedin.com/",
	},
]
</script>

<template>
	<LandingSectionhead>
		<template v-slot:title>{{ data.nome }}</template>
		<template v-slot:desc>bitcoin wallet</template>
	</LandingSectionhead>
	<div>
		<div class="flex items-center gap-1 py-4">
			<Icon name="mdi:web" size="16" color="blue" />
			Sito: 
			<span class="w-20">
				<a :href="data['web site']" target="_blank" class="text-blue-600 text-sm">
					{{ data["web site"]}}
				</a>
			</span>
		</div>
		<div class="flex items-center justify-center select-none font-mono">
			<div v-for="soc of social" class="grid grid-cols-4 gap-4">
				<a v-if="data[soc['nome']]" :href="soc['url']+data[soc['nome']]" target="_blank" class="text-blue-600">
					<Icon :name="soc['icona']" size="48" color="blue" />
					{{ soc['nome'] }}
				</a>
			</div>
		</div>
		<table>
			<WalletRowattr v-for="att of attributiWallet" :att="att" :data="data" />
		</table>
		<div>
			<WalletWalletscrutiny device="desktop" :valore="data['walletscrutiny-desktop']" />
			<WalletWalletscrutiny device="android" :valore="data['walletscrutiny-android']" />
			<WalletWalletscrutiny device="iphone" :valore="data['walletscrutiny-iphone']" />
		</div>
	</div>
</template>
