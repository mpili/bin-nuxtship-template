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
  <NuxtLink :href="url" styleName="inverted" class="group h-full">
    <div class="border-2 border-[#D8DEE9] border-opacity-50 rounded-md p-4 flex flex-col h-full">
      <div class="aspect-video overflow-hidden rounded">
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
        class="text-slate-500 mt-4 leading-relaxed text-left flex-grow"
      >
        {{ description }}
      </p>
      <div class="mt-4">
        <button class="btn btn-block">{{ title }}</button>
      </div>
    </div>
  </NuxtLink>
</template>
