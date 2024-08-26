<script setup>
const props = defineProps(["data"]);

const tagItaliani = [
  {
    icona: "material-symbols-light:add-business-outline",
    etichetta: "Strutture di servizio",
    tag: "amenity",
  },
  {
    icona: "material-symbols:fitness-center",
    etichetta: "Tempo libero",
    tag: "leisure",
  },
  {
    icona: "material-symbols:shopping-cart-outline",
    etichetta: "Shop",
    tag: "shop",
  },
  {
    icona: "material-symbols:travel",
    etichetta: "Turismo",
    tag: "tourism",
  },
  {
    icona: "ic:baseline-sports-handball",
    etichetta: "Sport",
    tag: "sport",
  },
  {
    icona: "game-icons:stone-crafting",
    etichetta: "Artigiano",
    tag: "craft",
  },
  {
    icona: "material-symbols-light:add-business-outline",
    etichetta: "Pensione",
    tag: "guest_house",
  },
  {
    icona: "material-symbols-light:health-and-safety-outline",
    etichetta: "Salute",
    tag: "healthcare",
  },
  {
    icona: "fluent-emoji-high-contrast:health-worker",
    etichetta: "Specializzazione",
    tag: "healthcare:speciality",
  },
  {
    icona: "fluent:food-20-regular",
    etichetta: "Cucina",
    tag: "cuisine",
  },
  {
    icona: "icon-park-outline:clothes-crew-neck",
    etichetta: "Abbigliamento",
    tag: "clothes",
  },
  {
    icona: "guidance:office-pod",
    etichetta: "Professionista",
    tag: "office",
  },
];

const social = [
  {
    nome: "instagram",
    icona: "mdi:instagram",
  },
  {
    nome: "facebook",
    icona: "mdi:facebook",
  },
  {
    nome: "twitter",
    icona: "bi:twitter-x",
  },
  {
    nome: "telegram",
    icona: "mdi:telegram",
  },
  {
    nome: "pinterest",
    icona: "mdi:pinterest",
  },
];

useHead({
  title: props?.data?.tags?.name + " | Bitcoin Italia Network",
});
</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ data.tags.name }}</template>
    <template v-slot:desc><OsnTipovenue :tags="data.tags" /></template>
  </LandingSectionhead>

  <OsnImmagine :idnodosm="data.id" />

  <div v-if="data.tags.description" class="pb-4">
    {{ data.tags.description }}
  </div>

  <div>
    <h2>Indirizzo</h2>
    <div class="p-2">
      <p v-if="data.tags['addr:place']">
        <span>
          {{ data.tags["addr:place"]
          }}<span v-if="data.tags['addr:housenumber']"
            >, {{ data.tags["addr:housenumber"] }}</span
          >
        </span>
      </p>
      <p v-if="data.tags['addr:district']">
        <span>
          {{ data.tags["addr:district"] }}
        </span>
      </p>
      <p>
        <span v-if="data.tags['addr:street']">
          {{ data.tags["addr:street"]
          }}<span v-if="data.tags['addr:housenumber']"
            >, {{ data.tags["addr:housenumber"] }}</span
          >
        </span>
        <span v-else-if="data.tags['contact:street']">
          {{ data.tags["contact:street"]
          }}<span v-if="data.tags['contact:housenumber']"
            >, {{ data.tags["contact:housenumber"] }}</span
          >
        </span>
      </p>
      <p v-if="data.tags['addr:suburb']">
        {{ data.tags["addr:suburb"] }}
      </p>
      <p>
        <span v-if="data.tags['addr:postcode']">{{
          data.tags["addr:postcode"]
        }}</span>
        <span v-else-if="data.tags['contact:postcode']">{{
          data.tags["contact:postcode"]
        }}</span>
        &nbsp;
        <span  class="text-blue-700 font-bold">
          <span v-if="data.tags['addr:city']">
            <OsnTaglink tag="%22addr:city%22" :valore="data.tags['addr:city']" >
              <template v-slot:testo>{{ data.tags["addr:city"] }}</template>
            </OsnTaglink>
          </span>
          <span v-else-if="data.tags['contact:city']">
            <OsnTaglink tag="contact:city" :valore="data.tags['contact:city']" >
              <template v-slot:testo>{{ data.tags["contact:city"] }}</template>
            </OsnTaglink>
          </span>
        </span>
        <span v-if="data.tags['addr:province']">({{ data.tags["addr:province"] }})</span>
      </p>
    </div>

  </div>
  <OsnTel v-if="data.tags.phone" icona="material-symbols:call" etichetta="Telefono" :telefono="data.tags.phone" />
  <OsnTel v-if="data.tags['contact:phone']" icona="material-symbols:call" etichetta="Telefono" :telefono="data.tags['contact:phone']" />
  <OsnTel v-if="data.tags['mobile']" icona="clarity:mobile-line" etichetta="Cell" :telefono="data.tags['mobile']" />
  <OsnTel v-if="data.tags['contact:mobile']" icona="clarity:mobile-line" etichetta="Cell" :telefono="data.tags['contact:mobile']" />
  <OsnTel v-if="data.tags['phone:mobile']" icona="ic:baseline-phone-iphone" etichetta="Cell" :telefono="data.tags['phone:mobile']" />

  <OsnTagyesno v-if="data.tags.wheelchair"
    icona="ph:wheelchair-light"
    etichetta="Sedie a rotelle"
    :testo="data.tags.wheelchair"
  />

  <OsnTagit
    v-for="i of tagItaliani"
    :icona="i.icona"
    :etichetta="i.etichetta"
    :tag="i.tag"
    :tags="data.tags"
  />

  <OsnTagyesno v-if="data.tags['outdoor_seating']"
    icona="ph:sun-bold"
    etichetta="Posti all'aperto"
    :testo="data.tags['outdoor_seating']"
  />

  <OsnTag v-if="data.tags.brand"
    icona="tabler:brand-pagekit"
    etichetta="Brand"
    :testo="data.tags.brand"
  />

  <OsnTag v-if="data.tags.operator"
    icona="guidance:office-pod"
    etichetta="Conduttore"
    :testo="data.tags.operator"
  />

  <OsnTag v-if="data.tags['currency:XBT:discount']"
    icona="streamline:discount-percent-circle"
    etichetta="sconto bitcoin"
    :testo="data.tags['currency:XBT:discount']"
  />


  <OsnTagyesno v-if="data.tags['payment:lightning']"
    icona="ph:lightning"
    etichetta="Pagamento con lightning"
    :testo="data.tags['payment:lightning']"
  />
  <OsnTagyesno v-if="data.tags['payment:lightning_contactless']"
    icona="ph:lightning"
    etichetta="Lightning contactless"
    :testo="data.tags['payment:lightning_contactless']"
  />
  <OsnTagyesno v-if="data.tags['payment:onchain']"
    icona="akar-icons:link-chain"
    etichetta="Pagamento on-chain"
    :testo="data.tags['payment:onchain']"
  />

  <OsnTag v-if="data.tags['opening_hours']"
    icona="material-symbols:nest-clock-farsight-analog-outline"
    etichetta="orari apertura"
    :testo="data.tags['opening_hours']"
  />

  <OsnDescrizione :idnodosm="data.id" />

  <div class="flex">
    <OsnTagwebsite v-if="data.tags.website" :url="data.tags.website" />
    <OsnTagwebsite v-if="data.tags['contact:website']" :url="data.tags['contact:website']" />
  </div>

  <OsnTag v-if="data.tags.email"
    icona="material-symbols:alternate-email"
    etichetta="email"
    :testo="data.tags.email"
  />
  <OsnTag v-if="data.tags['contact:email']"
    icona="material-symbols:mail-outline-sharp"
    etichetta="email"
    :testo="data.tags['contact:email']"
  />

  <div class="flex flex-wrap my-4">
    <OsnSocial
      v-for="s of social"
      :nome="s.nome"
      :icona="s.icona"
      :value="data.tags['contact:' + s.nome]"
    />
  </div>


  <OsnMap :data="data" />

  <OsnXmaps :data="data" />

  <div class="flex gap-2 py-2">
    <a
      :href="'https://www.openstreetmap.org/node/' + data.id"
      target="_blank"
      class="text-sm"
    >
      <LandingBadge
        icona="simple-icons:openstreetmap"
        testo="openstreetmap"
        coloreicona="#9CA3AF"
        coloretesto="gray-400"
      />
    </a>
    <a
      :href="'https://btcmap.org/merchant/node:' + data.id"
      target="_blank"
      class="text- text-sm"
      ><LandingBadge
        icona="hugeicons:bitcoin-location"
        testo="btcmap"
        coloreicona="#9CA3AF"
        coloretesto="gray-400"
    /></a>
  </div>

  <div v-if="data.tags['check_date']">
    <div class="flex items-center gap-1 my-2">
      <Icon
        name="material-symbols:event-available-outline"
        size="16"
        color="gray"
      />
      <span class="text-gray-300 text-sm w-48">Data di verifica&nbsp;</span>
      <span class="text-gray-300 text-sm">{{ data.tags["check_date"] }}</span>
    </div>
  </div>
  <div v-else-if="data.tags['survey:date']">
    <div class="flex items-center gap-1 my-2">
      <Icon name="material-symbols:event-available" size="16" color="gray" />
      <span class="text-gray-300 text-sm w-48">Data di verifica&nbsp;</span>
      <span class="text-gray-300 text-sm">{{ data.tags["survey:date"] }}</span>
    </div>
  </div>

</template>
