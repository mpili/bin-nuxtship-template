<script setup>
const props = defineProps(["eventi"]);

const showEventi = ref(false);
</script>
<template>
  <div v-if="eventi?.length > 0">
    <fieldset
      class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4"
    >
      <label class="label">
        <input type="checkbox" class="toggle" v-model="showEventi" />
        eventi passati
      </label>
    </fieldset>
    <ul v-if="showEventi" class="space-y-2 bg-base-100 rounded-box shadow-md p-2 max-h-96 overflow-y-auto">
      <li v-for="evento in eventi" :key="evento.id" class="border-b last:border-b-0">
        <NuxtLink
          :to="`/evento/${evento.id}`"
          class="flex items-center gap-3 p-2 hover:bg-base-200 rounded"
        >
          <img class="w-20 h-20 rounded-box object-cover" :src="useEventoImg(evento)" />
          <div>
            <div class="text-sm text-slate-500">
              {{ useGiornoSettimana(evento.data).substring(0, 3) + '.' + useformattaData(evento.data) }}
            </div>
            <div class="font-bold">
              {{ evento.titolo }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>