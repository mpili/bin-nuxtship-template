<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
      <div class="flex gap-2 py-2">
        <a
          :href="`https://wiki.openstreetmap.org/wiki/Tag:${tag}=${value}`"
          class="pr-2"
          target="_blank"
        >
          <LandingBadge
            icona="fluent:tag-question-mark-20-regular"
            testo="wiki openstreetmap"
            coloreicona="#9CA3AF"
            coloretesto="gray-400"
          />
        </a>
      </div>

</template>
