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
  <div class="card bg-base-100 w-80 shadow-xl border border-base-300 transition-colors duration-300">
    <figure>
      <img :src="imageSrc" :alt="imageAlt" class="w-full object-cover" />
    </figure>
    <div class="card-body text-base-content">
      <h2 class="card-title font-bold text-xl">{{ title }}</h2>
      <h3 v-if="subtitle" class="font-semibold opacity-70">{{ subtitle }}</h3>
      <p class="opacity-80">{{ description }}</p>
      <div v-if="buttonText" class="card-actions justify-end mt-4">
        <button class="btn btn-primary">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

