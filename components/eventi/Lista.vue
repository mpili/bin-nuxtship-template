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
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
    <div v-for="evento of eventi">
      <NuxtLink :to="`/evento/${evento.id}`">
        <div class="text-blue-700 max-w-[320px] py-2">
          <div class="border rounded-xl bg-clip-border shadow-md grid">
            <div class="pt-2 text-center font-semibold">
              {{ formattaData(evento.data) }}
            </div>
            <div v-if="evento.titolo" class="text-sm p-2">
              {{ evento.titolo }}
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
            <div
              v-if="evento.id_comunita"
              class="py-2 text-center font-semibold"
            >
              {{ evento.id_comunita }}
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
