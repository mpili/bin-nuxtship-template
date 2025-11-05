<script setup>
const props = defineProps(["data"]);

</script>

<template>
  <LocalitaHead :data="data" />

  <LocalitaEventi :city="data?.name" />

  <LocalitaMeetup :data="data" />

  <LocalitaMap :data="data" />
  
  <OnwListapoi :datapois="data.poi" />
  <LandingDisclaimer />
</template>