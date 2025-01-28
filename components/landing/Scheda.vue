<script>
export default {
  props: {
    url: {
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>
<template>
  <NuxtLink :href="url" styleName="inverted">
    <div class="border-2 border-[#D8DEE9] border-opacity-50 rounded-md p-4">
      <div>
        <NuxtImg
          :src="img"
          format="webp"
          alt="dove"
          class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
        />
      </div>
      <p
        v-if="description"
        class="text-slate-500 mt-2 leading-relaxed text-left"
      >
        {{ description }}
      </p>
      <button class="btn btn-block">{{ title }}</button>
    </div>
  </NuxtLink>
</template>
