<script setup>
defineProps(["data"]);
</script>

<template>
  <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
    <div
      v-for="tipo of [
        'amenity',
        'shop',
        'cuisine',
        'office',
        'tourism',
        'guest_house',
        'craft',
        'healthcare',
        'leisure',
        'sport',
      ]"
      class="py-5"
    >
      <details class="group">
        <summary
          class="flex justify-between items-center cursor-pointer list-none"
        >
          <span class="text-lg font-bold"><OsnTraducitag :tag="tipo" value="x" />  </span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>

        <div class="mt-3 group-open:animate-fadeIn">
          <div v-for="tag of data[tipo]" class="py-2">
            <OstPagecountag :tipo="tipo" :tag="tag" />
          </div>
        </div>
      </details>
    </div>
  </div>
</template>