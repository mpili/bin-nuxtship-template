<script setup>
const isDev = process.dev;
</script>

<template>
  <EventiHead />
  <EventiCalendar v-if="isDev" />
  <EventiNextdays />
  <EventiAltrical />
</template>
