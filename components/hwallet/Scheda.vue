<script setup>
defineProps(["data"]);

const attributi = [
  { nome: "airgapped", icona: "arcticons:airgap-wallet" },
  { nome: "bluetooth", icona: "material-symbols:bluetooth" },
  { nome: "nfc", icona: "fa6-brands:nfc-symbol" },
  { nome: "microsd", icona: "material-symbols:sd-card-outline" },
  { nome: "qrcode", icona: "material-symbols:qr-code" },
  { nome: "usb", icona: "material-symbols:usb" },
  { nome: "opensource", icona: "simple-icons:opensourceinitiative" },
];
</script>

<template>
  <div v-if="data" class="flex">
    <div class="m-1 py-2 pl-3 pr-4 w-1/4">
      <a :href="data.sitoweb" target="_blank" class="text-blue-600">
        {{ data.nome }}
      </a>
    </div>
    <div class="flex flex-wrap">
      <span v-for="attr of attributi">
        <span v-if="data[attr.nome]">
          <LandingBadge
            :icona="attr.icona"
            :testo="attr.nome"
            coloreicona="#0ac18e"
          />
        </span>
      </span>
    </div>
  </div>
</template>
