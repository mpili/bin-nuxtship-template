<script setup>
const { tag, value } = useRoute().params;

const url_api = `https://bin-dev.pockethost.io/api/collections/xtags/records?filter=(tag=%22${tag}%22 %26%26 value=%22${value}%22)&perPage=999`;
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});


const url_api_xtag = `https://bin-dev.pockethost.io/api/collections/xtag/records?filter=(tag=%22${tag}%22 %26%26 value=%22${value}%22)`;
const {
  pending: pending_xtag,
  data: dbdata_xtag,
  error: error_xtag,
} = await useLazyFetch(url_api_xtag, {
  lazy: true,
  server: false,
});

const breadcrumb = computed(() => [
  {
    label: `${tag} : ${value}`,
  },
]);

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>



    <div v-if="pending_xtag">
    </div>
    <div v-else>
      <XtTestata :data="dbdata_xtag" />
    </div>

    <div v-if="pending">
      Loading
      <Icon name="eos-icons:bubble-loading" size="48" color="gray" />
    </div>
    <div v-else>
      <XtLista :pois="data.items" />
    </div>
  </LandingContainer>
</template>

