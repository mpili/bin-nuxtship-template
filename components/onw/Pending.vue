<script setup>
const props = defineProps(['id']);
</script>
<template>
	<UiSkeleton />
      <div class="flex gap-2 py-2">
		<OsnEventi :idnodosm="id" />
		<!-- <OsnXtagsx :idnodosm="data?.id" /> -->
        <OnwOsm :id="id" />
      </div>
</template>
