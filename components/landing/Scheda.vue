<script setup>
const props = defineProps({
  url: String,
  img: String,
  description: String,
  title: String,
});

const fallbackImg = "/img/features/formazione.jpg";

const handleImageError = (e) => {
  const img = e?.target || e?.currentTarget;
  if (!img || img.src === fallbackImg) return;
  img.src = fallbackImg;
};
</script>

<template>
  <NuxtLink :href="url" class="group h-full">
    <div class="bg-base-100 border-2 border-base-200 rounded-xl p-4 flex flex-col h-full shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
      <div class="aspect-video overflow-hidden rounded-lg">
        <NuxtImg
          :src="img || fallbackImg"
          format="webp"
          :alt="title"
          class="w-full h-full object-cover transition group-hover:scale-105"
          @error="handleImageError"
        />
      </div>
      <p
        v-if="description"
        class="text-base-content/70 mt-4 leading-relaxed text-left flex-grow"
      >
        {{ description }}
      </p>
      <div class="mt-4">
        <button class="btn btn-block btn-outline group-hover:btn-primary transition-colors">
          {{ title }}
        </button>
      </div>
    </div>
  </NuxtLink>
</template>
