<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="shadow p-2 bg-base-200">
    
    <h2 class="w-full text-2xl m-2 bg-base-300">In primo piano</h2>
    
    <div class="flex overflow-x-scroll pb-1 hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
        <div v-for="item in data" :key="item.id" class="inline-block px-2">
          <NuxtLink :href="item.url">
            <div class="card bg-base-100 w-96 shadow">
              <figure>
                <img :src="item.img" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{{ item.nome }}</h2>
                <p>
                  {{ item.indirizzo }}
                </p>
                <p class="font-bold">
                  {{ item.citta }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
