<script setup>
defineProps(["data"]);
</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ data.tags.name }}</template>
    <template v-slot:desc><OsnTipovenue :tags="data.tags" /></template>
  </LandingSectionhead>

  <div class="py-8">
    <LMap
      style="height: 250px"
      :zoom="18"
      :center="[data.lat, data.lon]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[data.lat, data.lon]" />
    </LMap>
  </div>

  <OsnTag etichetta="Descrizione" :testo="data.tags.description" />

  <div>
    <h2>Indirizzo</h2>
    <div class="p-2">
      <p>
        <span v-if="data.tags['addr:street']">
          {{ data.tags["addr:street"] }}<span v-if="data.tags['addr:housenumber']">, {{ data.tags["addr:housenumber"] }}</span>
        </span>
        <span v-else-if="data.tags['contact:street']">
          {{ data.tags["contact:street"] }}<span v-if="data.tags['contact:housenumber']">, {{ data.tags["contact:housenumber"] }}</span>
        </span>
      </p>
      <p>
        <span v-if="data.tags['addr:postcode']">{{ data.tags["addr:postcode"] }}</span>
        <span v-else-if="data.tags['contact:postcode']">{{ data.tags["contact:postcode"] }}</span>
        &nbsp;
        <span v-if="data.tags['addr:city']">{{ data.tags["addr:city"] }}</span>
        <span v-else-if="data.tags['contact:city']">{{ data.tags["contact:city"] }}</span>
      </p>
    </div>

      <div
        class="relative inline-block bg-white mt-2 mb-5 shadow ring-1 ring-gray-900/5 max-w-lg rounded-lg"
      >
        <div class="pl-4 p-2 text-gray-400">google maps</div>
        <div class="flex divide-x divide-gray-300/50">
          <OsnGmaplink
            :etichetta="'posizione'"
            :url="'https://maps.google.com/maps?z=12&t=m&q=loc:' + data.lat + '+' + data.lon"
          />
          <OsnGmaplink
            :etichetta="'streetview'"
            :url="'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=' + data.lat + ',' + data.lon"
          />
          <OsnGmaplink
            :etichetta="'percorso'"
            :url="'https://maps.google.com/maps?daddr=(' + data.lat + ',' + data.lon + ')'"
          />
        </div>
      </div>
  </div>
  <OsnTag
    icona="clarity:mobile-line"
    etichetta="Cell"
    :testo="data.tags['contact:mobile']"
  />
  <OsnTag
    icona="ic:baseline-phone-iphone"
    etichetta="Cell"
    :testo="data.tags['phone:mobile']"
  />
  <OsnTag
    icona="material-symbols:call"
    etichetta="Telefono"
    :testo="data.tags.phone"
  />

  <OsnTagyesno
    icona="ph:wheelchair-light"
    etichetta="Sedie a rotelle"
    :testo="data.tags.wheelchair"
  />
  <OsnTag
    icona="material-symbols-light:add-business-outline"
    etichetta="Servizio"
    :testo="data.tags.amenity"
  />

  <OsnTag
    icona="fluent:food-20-regular"
    etichetta="Cucina"
    :testo="data.tags.cuisine"
  />
  <OsnTag
    icona="material-symbols:fitness-center"
    etichetta="Tempo libero"
    :testo="data.tags.leisure"
  />
  <OsnTag
    icona="material-symbols:shopping-cart-outline"
    etichetta="Shop"
    :testo="data.tags.shop"
  />
  <OsnTag
    icona="material-symbols:travel"
    etichetta="Turismo"
    :testo="data.tags.tourism"
  />
  <OsnTag
    icona="material-symbols-light:add-business-outline"
    etichetta="guest_house"
    :testo="data.tags['guest_house']"
  />
  <OsnTag
    icona="guidance:office-pod"
    etichetta="Office"
    :testo="data.tags.office"
  />
  <OsnTag
    icona="guidance:office-pod"
    etichetta="Conduttore"
    :testo="data.tags.operator"
  />

  <OsnTagyesno
    icona="ph:lightning"
    etichetta="Pagamento con lightning"
    :testo="data.tags['payment:lightning']"
  />
  <OsnTagyesno
    icona="ph:lightning"
    etichetta="Lightning contactles"
    :testo="data.tags['payment:lightning_contactless']"
  />
  <OsnTagyesno
    icona="akar-icons:link-chain"
    etichetta="Pagamento on-chain"
    :testo="data.tags['payment:onchain']"
  />

  <OsnTagwebsite :url="data.tags.website" />
  <OsnTagwebsite :url="data.tags['contact:website']" />
  <OsnTag
    icona="ic:baseline-facebook"
    etichetta="Facebook"
    :testo="data.tags['contact:facebook']"
  />
  <OsnTag
    icona="ph:instagram-logo"
    etichetta="Instagram"
    :testo="data.tags['contact:instagram']"
  />
  <OsnTag
    icona="ri:twitter-x-fill"
    etichetta="X(Twitter)"
    :testo="data.tags['contact:twitter']"
  />
  <OsnTag
    icona="ic:baseline-telegram"
    etichetta="Telegram"
    :testo="data.tags['contact:telegram']"
  />

  <OsnTag
    icona="material-symbols:alternate-email"
    etichetta="email"
    :testo="data.tags.email"
  />
  <OsnTag
    icona="material-symbols:mail-outline-sharp"
    etichetta="email"
    :testo="data.tags['contact:email']"
  />
  <OsnTag
    icona="material-symbols:nest-clock-farsight-analog-outline"
    etichetta="orari apertura"
    :testo="data.tags['opening_hours']"
  />

  <OsnTag
    icona="material-symbols:event-available-outline"
    etichetta="Data di verifica"
    :testo="data.tags.check_date"
  />
  <OsnTag
    icona="material-symbols:event-available"
    etichetta="Data di verifica"
    :testo="data.tags['survey:date']"
  />

  <a
    :href="'https://www.openstreetmap.org/node/' + data.id"
    target="_blank"
    class="text-blue-600"
    >scheda su openstreetmap</a
  >
</template>
