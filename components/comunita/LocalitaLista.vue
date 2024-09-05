<script setup>
const url_api = `/data/data_localita.json`;

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

</script>

<template>
	<div v-if="pending">
			Loading ...
		</div>
	<div v-else>
		<div class="border-1 my-2 rounded shadow p-4 font-bold text-blue-700">
			<div v-for="item of data.localita" class="py-2">
				<NuxtLink :to="`/l/${item.id}`">
					{{item.name}}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>