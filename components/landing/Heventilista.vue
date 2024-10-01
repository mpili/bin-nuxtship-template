<script>
// const props = defineProps(["eventi"]);

export default {
  props: {
    eventi: {
      required: true,
    },
  },
  methods: {
    formattaData(data) {
      const d = new Date(data);
      return d.toLocaleDateString("it-IT");
    },
  },
};
</script>

<template>
  <div class="flex overflow-x-scroll pb-4 hide-scroll-bar">
    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
      <div v-for="evento of eventi" class="inline-block px-3">
        <NuxtLink :to="`/evento/${evento.id}`">
          <div class="w-64 max-w-xs overflow-hidden text-blue-700">
            <div class="border rounded-xl bg-clip-border shadow-md grid">
              <div class="pt-2 text-center font-semibold">
                {{ formattaData(evento.data) }}
              </div>
              <div class="h-12 overflow-hidden px-4">
                <span class="text-sm" v-if="evento.titolo">{{
                  evento.titolo
                }}</span>
              </div>
              <div v-if="evento.img" class="m-2">
                <img
                  class="rounded-lg"
                  :src="
                    'https://bin-dev.pockethost.io/api/files/eventi/' +
                    evento.id +
                    '/' +
                    evento.img
                  "
                />
              </div>
              <div
                v-else-if="evento.id_comunita"
                class="relative m-0 overflow-hidden bg-transparent bg-clip-border m-2"
              >
                <img
                  class="rounded-lg"
                  :src="`/img/c/${evento.id_comunita}.jpeg`"
                />
              </div>
              <!-- <div  class="h-8 overflow-hidden text-center">
                <span v-if="evento.id_comunita" class="py-2 font-semibold">{{ evento.id_comunita }}</span>
              </div> -->
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
