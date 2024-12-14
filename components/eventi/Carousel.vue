<script>
export default {
  props: {
    eventi: {
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex overflow-x-scroll pb-4 hide-scroll-bar">
    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
      <div v-for="evento of eventi" class="inline-block px-2">
        <EventiCard :evento="evento" />
      </div>
    </div>
  </div>
</template>
