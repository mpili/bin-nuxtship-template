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
    }
  }
};
</script>

<template>
  <div v-for="evento of eventi" class="py-2 text-xl text-blue-700">
    <NuxtLink :to="`/evento/${evento.id}`">
      <div class="flex gap-4">
        <Icon name="material-symbols:calendar-month" size="48" color="gray" />
        <!-- <span>{{ formattaData(evento.data) }}</span> -->
        <span class="pt-3">
          {{ evento.titolo }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
