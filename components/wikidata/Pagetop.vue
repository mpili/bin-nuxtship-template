<script setup>
const props = defineProps(["brandwikidata"]);
const isDev = process.dev;

const brand_wikidata = props.brandwikidata;
const apiUrl = useApiWikidata(brand_wikidata);

const {
  pending: pending,
  data: wikidata,
  error: error,
} = await useLazyFetch(apiUrl, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div>
    <div v-if="pending">
      <div class="flex w-52 flex-col gap-4">
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
    </div>
    <div v-else>
      <WikidataSectionhead
        :wikidataentities="wikidata?.entities[brand_wikidata]"
      />
      <button class="mr-2">
        <NuxtLink
          v-if="wikidata?.entities[brand_wikidata]"
          :to="`https://www.wikidata.org/wiki/${brand_wikidata}`"
          target="_blank"
          class="btn btn-outline btn-primary my-2"
        >
          <Icon name="openmoji:wikidata" /> Vai alla pagina su Wikidata
          {{ brand_wikidata }}
        </NuxtLink>
      </button>

      <div
        v-if="isDev"
        tabindex="0"
        class="collapse bg-base-100 border-base-300 border my-4"
      >
        <div class="collapse-title text-gray-400">Dettaglio dati wikidata</div>
        <div class="collapse-content text-sm">
          <p>
            apiUrl: <span class="text-blue-400">{{ apiUrl }}</span>
          </p>
          <p class="text-gray-400 font-mono text-sm">{{ wikidata }}</p>
        </div>
      </div>
    </div>
    <MainRivelaerror v-if="error" :error="error" />
  </div>
</template>
