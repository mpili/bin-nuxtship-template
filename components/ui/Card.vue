<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure class="px-10 pt-10">
      <img :src="imageSrc" :alt="imageAlt" class="rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <div v-if="buttonText" class="card-actions justify-end">
        <button class="btn btn-primary">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

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
    description: {
      type: String,
    },
    buttonText: {
      type: String,
    },
  },
};
</script>
  