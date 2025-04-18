<script setup>
const url_api =
  "https://api.bitcoinbeer.events/api/read_events.php?api_key=1190014a4418d774646c93a41861785a638bb921bc7cd2785c5c46802d1676ae";

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>
<template>
  <h1>Eventi BB</h1>

  <div v-if="pending">
    <span class="loading loading-spinner loading-md"></span>
  </div>
  <div v-else>
    <div class="flex overflow-x-scroll pb-4 hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
        <div v-for="evento in data" class="inline-block px-2">
          <NuxtLink :href="`https://bitcoinbeer.events/event/${evento.id}`">
            <UiEvent
              :event="{
                date: evento?.event_date,
                title: evento.title,
                image: evento.locandina,
                description: evento.venue,
                location: evento.address,
                city: evento?.city,
              }"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>