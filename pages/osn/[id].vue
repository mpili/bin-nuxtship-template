<script setup>
const { id } = useRoute().params;

const pars = `nwr(id:${id})`;
const url_api = useOverpass(pars);
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});


const db_url_api = `https://bin-dev.pockethost.io/api/collections/attivita/records?filter=(id_nod_osm='${id}')`;
const {
  pending: dbpending,
  data: dbdata,
  error: dberror,
} = await useLazyFetch(db_url_api, {
  lazy: true,
  server: false,
});


definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <div v-if="pending">
      <OnwPending :id="id" />
    </div>
    <div v-else>
      <OsnPage v-if="data?.elements.length > 0"
        :data="data?.elements[0]"
        :dbpending="dbpending"
        :dbdata="dbdata"
        :dberror="dberror"
      />
    </div>
    <!-- </div> -->
     <!-- <MainRivelaerror v-if="error" :error="error" /> -->
    <LandingDisclaimer />
    <OnwFab
        :id="id"
        type="n"

        :oppending="pending"
        :opdata="data"
        :operror="error"

        :dbpending="dbpending"
        :dbdata="dbdata"
        :dberror="dberror"
    
    />
  </LandingContainer>
</template>
