<script setup>
defineProps(["data"]);
</script>

<template>
    <div
      class="relative inline-block text-sm text-gray-600 bg-white p-1 mt-2 mb-5 shadow ring-1 ring-gray-900/5 max-w-lg rounded-lg"
    >
      <div class="pl-4 p-1">altre mappe</div>
      <div class="flex flex-wrap">
        <div class="border">
          <div class="text-center">google</div>
          <div class="flex">
            <OsnGmaplink
              etichetta="posizione"
              :url="
                'https://maps.google.com/maps?z=12&t=m&q=loc:' +
                data.lat +
                '+' +
                data.lon
              "
              :icona="'material-symbols:location-on'"
            />
            <OsnGmaplink
              etichetta="streetview"
              :url="
                'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=' +
                data.lat +
                ',' +
                data.lon
              "
              :icona="'material-symbols:streetview'"
            />
            <OsnGmaplink
              etichetta="direzioni"
              :url="
                'https://maps.google.com/maps?daddr=(' +
                data.lat +
                ',' +
                data.lon +
                ')'
              "
              :icona="'material-symbols:directions'"
            />
          </div>
        </div>

        <div class="border">
          <div class="text-center">bing</div>
          <OsnGmaplink
            etichetta="posizione"
            :url="
              'https://www.bing.com/maps?cp=' +
              data.lat +
              '~' +
              data.lon +
              '&lvl=20'
            "
            :icona="'tabler:brand-bing'"
          />
        </div>
      </div>
    </div>
</template>