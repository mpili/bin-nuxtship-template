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
          class="flex justify-between items-center text-lg font-bold cursor-pointer list-none"
        >
          <span> {{ tipo }} - <OsnTraducitag :tag="tipo" value="x" /> </span>
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
          <div v-for="tag of data[tipo]">
            <div class="flex flex-wrap py-1">
              <div class="font-bold pr-2">{{ tag.count }}</div>

              <a
                :href="`https://wiki.openstreetmap.org/wiki/Tag:${tipo}=${tag[tipo]}`"
                class="pr-2"
                target="_blank"
              >
                <div class="flex text-gray-500 gap-1">
                  <Icon name="fluent:tag-question-mark-20-regular" />
                  {{ tag[tipo] }}
                </div>
              </a>

              <div>
                <a
                  :href="`/ost/${tipo}/${tag[tipo]}`"
                  class="text-blue-500 pl-2"
                  target="_blank"
                >
                  <OsnTraducitag :tag="tipo" :value="tag[tipo]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>