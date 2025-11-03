<script setup>
const props = defineProps(["pois"]);

// Funzione per dividere l'array in chunks di dimensione specificata
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

// Estrae gli ID dei nodi OSM dai POI
const allNodeIds = props.pois.map((poi) => poi.id_nod_osm);

// Divide gli ID in gruppi di 100
const nodeIdChunks = chunkArray(allNodeIds, 200);

// Stato per memorizzare tutti gli elementi combinati
const allElements = ref([]);
const pending = ref(true);
const error = ref(null);

// Funzione per effettuare una singola chiamata API
const fetchChunk = async (nodeIds) => {
  const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(id:${nodeIds.join(
    ","
  )});out;`;
  try {
    const response = await useFetch(url, {
      server: false,
    });
    return response.data.value.elements;
  } catch (err) {
    error.value = err;
    return [];
  }
};

// Funzione principale per effettuare tutte le chiamate API
const fetchAllData = async () => {
  try {
    pending.value = true;
    const promises = nodeIdChunks.map((chunk) => fetchChunk(chunk));
    const results = await Promise.all(promises);
    // Combina tutti i risultati in un unico array
    allElements.value = results.flat();
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }
};

// Avvia il fetch dei dati
onMounted(() => {
  fetchAllData();
});
</script>

<template>
  <div v-if="pending">
    <span class="loading loading-spinner loading-xs"></span>
  </div>
  <div v-else-if="error">
    <span class="text-red-500">Si è verificato un errore: {{ error }}</span>
  </div>
  <div v-else>
    <OstMap :pois="allElements" />
    <OnwListapoi :datapois="allElements" />
  </div>
</template>
