<script setup>
defineProps(["tags"]);
</script>

<template>
  <span>
    <span v-if="tags['addr:street']" itemprop="streetAddress">
      {{ tags["addr:street"]
      }}<span v-if="tags['addr:housenumber']"
        >, {{ tags["addr:housenumber"]
        }}<span v-if="tags['addr:unit']"
          >/{{ tags["addr:unit"] }}</span
        ></span
      >
    </span>
    <span v-else-if="tags['contact:street']" itemprop="streetAddress">
      {{ tags["contact:street"]
      }}<span v-if="tags['contact:housenumber']"
        >, {{ tags["contact:housenumber"] }}</span
      >
    </span>
  </span>
</template>