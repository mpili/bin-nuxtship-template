<script setup>
defineProps(["data"]);

import hwAttributi from "~/assets/data/hw-attributi.json";
</script>

<template>
  <div v-if="data" class="flex">
    <NuxtLink :to="'/hw/' + data.id" class="text-blue-600">
      <div class="flex">
        <div class="m-2">
          <NuxtImg
            :src="
              'https://bin-dev.pockethost.io/api/files/hardwarewallet/' +
              data.id +
              '/' +
              data.featuredImage
            "
            alt="copertina"
            class="transition-transform transform hover:scale-125"
            width="40"
          />
        </div>

        <div class="w-36 pt-4">
          {{ data.nome }}
        </div>
      </div>
    </NuxtLink>
    <div class="flex flex-wrap m-1 py-2">
      <span v-for="attr of hwAttributi">
        <Icon
          v-if="data[attr.nome]"
          :name="attr.icona"
          size="16"
          :color="attr.colore"
        />
        <Icon v-else :name="attr.icona" size="16" color="#eee" />
      </span>
    </div>
  </div>
</template>
