<script setup>
defineProps(["data"]);
</script>

<template>
  <div class="p-4 rounded-xl">
    <div
      class="relative flex-col bg-clip-border rounded-xl shadow-none grid gap-2 item sm:grid-cols-2"
    >
      <div
        class="relative bg-clip-border rounded-xl overflow-hidden shadow-lg m-0"
      >
        <a :href="data.url" target="_blank">
          <NuxtImg
            :src="'/img/libri/' + data.id + '.jpg'"
            alt="copertina"
            class="object-cover w-full h-full"
            format="webp"
          />
        </a>
      </div>
      <a :href="data.url" target="_blank">
        <div class="p-6 px-2 sm:pr-6 sm:pl-4">
          <p
            class="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold"
          >
            Bitcoin
          </p>
          <span
            class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 normal-case transition-colors"
            >{{ data.titolo }}</span
          >
          <p
            class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal"
          >
            {{ data.sottotitolo }}.
          </p>
          <div class="flex items-center gap-4">
            <!-- <NuxtImg :src="'/img/libri/autori/'+data.id+'.jpg'" class="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg" /> -->
            <UiAvatar :url="'/img/libri/autori/' + data.id + '.jpg'" />
            <div>
              <p
                class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold"
              >
                {{ data.autori }}
              </p>
              <p
                v-if="data.traduttore"
                class="block antialiased font-sans text-base font-light leading-relaxed mb-0.5"
              >
                <span class="text-sm">Traduzione:</span>
                <br />
                <span class="!font-semibold">{{ data.traduttore }}</span>
              </p>
              <p
                class="block antialiased font-sans text-sm leading-normal font-normal"
              >
                {{ data["anno"] }}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
