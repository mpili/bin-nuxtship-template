<script setup>
const props = defineProps(["datapois"]);

const sortedPois = computed(() =>
  [...props.datapois].sort((a, b) => {
    const nameA = a.tags?.name?.toLowerCase() || "";
    const nameB = b.tags?.name?.toLowerCase() || "";
    return nameA.localeCompare(nameB);
  })
);
</script>
<template>
  <div class="overflow-x-auto">
    <table class="table table-xs table-pin-cols">
      <thead>
        <tr>
          <th></th>
          <th>categoria</th>
          <th>nome</th>
          <th>indirizzo</th>
          <th>città</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="poi in sortedPois" :key="poi.id">
          <td>
            <Icon :name="useIconavenue(poi.tags)" size="20" />
          </td>
          <td>{{ useTipovenue(poi.tags) }}</td>
          <td>
            <OnwXbtindicator :tags="poi.tags">
              <NuxtLink :to="usePoiLink(poi)" class="font-semibold">
                {{ poi.tags["name"] }}
              </NuxtLink>
            </OnwXbtindicator>
          </td>
          <td>{{ usePoiStreet(poi) }}</td>
          <td v-if="useComuneurl(usePoiCitta(poi))">
            <OnwCittalink :citta="usePoiCitta(poi)" />
          </td>
          <td v-else>{{ usePoiCitta(poi) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>