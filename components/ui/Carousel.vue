<template>
  <div class="carousel carousel-center bg-neutral rounded-box max-w space-x-4 p-4">
    <div
      class="carousel-item relative"
      v-for="(slide, index) in slides"
      :key="index"
      :id="`slide${index}`"
    >
      <img :src="slide.image" class="w-full" />

      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a :href="`#slide${index === 0 ? slides.length-1 : index-1}`" class="btn btn-circle">❮</a>
        <a :href="`#slide${index === slides.length - 1 ? 0 : index + 1}`" class="btn btn-circle">❯</a>
      </div>

    </div>
  </div>

	<div class="flex w-full justify-center gap-2 py-2">
		<a 
			v-for="(slide, index) in slides"
			:href="`#slide${index}`"
			class="btn btn-sm"
		>
			{{index + 1}}
		</a>
	</div>

</template>
<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>
