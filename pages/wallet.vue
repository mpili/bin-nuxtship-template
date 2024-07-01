<script setup>
const url_api = `/data/wallets.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

definePageMeta({
  layout: "landing",
});

const webbrowser = defineModel("webbrowser", { default: false });
const selfcustodial = defineModel("selfcustodial", { default: false });
const custodial = defineModel("custodial", { default: false });
const coincontrol = defineModel("coincontrol", { default: false });
const opensource = defineModel("opensource", { default: false });

const attributiWallet = [
  {
    campo: "lightning",
    icona: "ph:lightning-fill",
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

  // {
  //   campo: "per iniziare",
  //   icona: "bi:emoji-smile-fill",
  //   colore: "#D9B600",
  //   titolo: "Per iniziare",
  //   descrizione: "Wallet adatto ai principanti",
  // },
];

const wo_webbrowser = {
  campo: "Web browser",
  icona: "mdi:web",
  colore: "blue",
  titolo: "Browser extension",
  descrizione: "App disponibile come estensione del Web browser",
};

const wo_selfcustodial = {
  campo: "selfcustodial",
  icona: "material-symbols:key-rounded",
  colore: "green",
  titolo: "Self custodial",
  descrizione: "L'utente ha il controllo delle proprie chiavi private",
};

const wo_custodial = {
  campo: "custodial",
  icona: "material-symbols:vpn-key-off",
  colore: "red",
  titolo: "Custodial",
  descrizione:
    "Le chiavi private sono gestite dal fornitore, l'utente non ha controllo diretto dei propri fondi",
};

const wo_coincontrol = {
  campo: "Coin Control",
  icona: "ph:hand-coins-thin",
  colore: "#181717",
  titolo: "coin control",
  descrizione: "Consente il controllo degli input della transazione",
};

const wo_opensource = {
  campo: "open source",
  icona: "mdi:github",
  colore: "#181717",
  titolo: "open source",
  descrizione: "Sono disponibili i sorgenti del programma",
};

const attributiWalletOpz = [
  wo_webbrowser,
  wo_selfcustodial,
  wo_custodial,
  wo_coincontrol,
  wo_opensource,
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Wallet</template>
      <template v-slot:desc>Le applicazioni per gestire i tuoi fondi.</template>
    </LandingSectionhead>

    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div class="pt-8">
        <div v-for="item of data">
          <div class="flex items-center gap-1">
            <img :src="'/img/wallet/' + item.id + '.png'" class="w-6 h-6" />
            <div class="w-48">
              <NuxtLink :to="'/w/' + item.id" class="text-blue-600">
                {{ item.nome }}
              </NuxtLink>
            </div>
            <div v-for="att of attributiWallet">
              <WalletIcona :campo="item[att.campo]" :att="att" />
            </div>

            <div>
              <WalletIcona
                v-if="webbrowser"
                :campo="item['Web browser']"
                :att="wo_webbrowser"
              />
            </div>

            <div>
              <WalletIcona
                v-if="selfcustodial"
                :campo="item['selfcustodial']"
                :att="wo_selfcustodial"
              />
            </div>

            <div>
              <WalletIcona
                v-if="custodial"
                :campo="item['custodial']"
                :att="wo_custodial"
              />
            </div>

            <div>
              <WalletIcona
                v-if="coincontrol"
                :campo="item['Coin Control']"
                :att="wo_coincontrol"
              />
            </div>

            <div>
              <WalletIcona
                v-if="opensource"
                :campo="item['Coin Control']"
                :att="wo_opensource"
              />
            </div>


          </div>
        </div>
      </div>

      <div>
        <h2
          class="text-2xl font-bold leading-7 sm:text-3xl sm:tracking-tight py-4 pt-8"
        >
          Legenda
        </h2>
        <div class="divide-y divide-gray-300/50">
          <WalletAttrdesc v-for="att of attributiWallet" :att="att" />

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="webbrowser" v-model="webbrowser" />
            </div>
            <WalletAttrdsub :att="wo_webbrowser" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input
                type="checkbox"
                id="selfcustodial"
                v-model="selfcustodial"
              />
            </div>
            <WalletAttrdsub :att="wo_selfcustodial" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="custodial" v-model="custodial" />
            </div>
            <WalletAttrdsub :att="wo_custodial" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="coincontrol" v-model="coincontrol" />
            </div>
            <WalletAttrdsub :att="wo_coincontrol" />
          </div>

          <div class="flex flex-row gap-4">
            <div class="w-4">
              <input type="checkbox" id="opensource" v-model="opensource" />
            </div>
            <WalletAttrdsub :att="wo_opensource" />
          </div>

        </div>
      </div>
    </div>
  </LandingContainer>
</template>
