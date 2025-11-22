<script>
export default {
  name: "Card",
  props: {
    imageSrc: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    buttonText: {
      type: String,
    },
  },
};
</script>
<template>
  <div class="card bg-base-100 w-80 shadow-xl">
    <!-- <figure class="px-4 pt-10"> -->
    <figure>
      <!-- <img :src="imageSrc" :alt="imageAlt" class="rounded-xl" /> -->
      <img :src="imageSrc" :alt="imageAlt" />
      <!-- <NuxtImg :src="imageSrc" :alt="imageAlt" class="rounded-xl" /> -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <h3 v-if="subtitle" class="font-semibold">{{ subtitle }}</h3>
      <p>{{ description }}</p>
      <div v-if="buttonText" class="card-actions justify-end">
        <button class="btn btn-primary">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

