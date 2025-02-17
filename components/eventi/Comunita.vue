<script setup>
const props = defineProps(["idcomunita"]);

const url_api = `/data/community/${props.idcomunita}.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div>
    <div v-if="pending">
      <span class="loading loading-spinner loading-xs"></span>
    </div>
    <div v-else>
      <p>
        <NuxtLink :to="`/c/${data.id}`">
          Comunità: <span class="font-bold text-blue-500">{{ data.name }}</span>
        </NuxtLink>
      </p>
    </div>
  </div>
</template>