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
  <div v-if="idcomunita">
    <div v-if="pending"></div>
    <div v-else class="max-w-md">
      <NuxtLink :href="`/c/${data.id}`" class="text-blue-500 text-xl font-bold">
        <div class="flex items-center rounded-full border shadow gap-6 p-2">
          <NuxtImg
            :src="`/img/c/${idcomunita}.jpeg`"
            format="webp"
            class="inline-block relative object-cover object-center !rounded-full w-20 h-20 rounded-lg"
          />
          {{ data.name }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
