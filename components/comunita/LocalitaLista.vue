<script setup>
const url_api = `/data/data_localita.json`;

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <div class="border-1 my-2 rounded shadow p-4 font-bold">
      <div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div v-for="item of data.localita" class="py-2">
          <NuxtLink :to="`/l/${item.id}`">
            <!-- component -->
            <div class="flex justify-center items-center">
              <div class="mx-auto">
                <!-- Centering wrapper -->
                <div
                  class="relative flex flex-col shadow-md bg-clip-border rounded-xl w-36"
                >
                  <div
                    class="relative mx-4 mt-4 overflow-hidden bg-clip-border rounded-xl h-28"
                  >
                    <NuxtImg
                      :src="`/img/l/${item.id}.jpg`"
                      format="webp"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div class="p-2 pt-0">
                    <button
                      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      type="button"
                    >
                      {{ item.name }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>