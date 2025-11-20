<script>
// const props = defineProps(["eventi"]);

export default {
  props: {
    eventi: {
      required: true,
    },
  },
};
</script>

<template>
  <div class="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-2">
    <div class="carousel-item" v-for="evento of eventi">
      <EventiCard :evento="evento" />
    </div>
  </div>

  <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
    <div v-for="evento of eventi">
      <EventiCard :evento="evento" />
    </div>
  </div> -->
</template>
