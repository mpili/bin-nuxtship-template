<template>
  <h1 class="text-3xl font-bold text-center">calendario</h1>
  <calendar-date
    class="cally bg-base-100 border border-base-300 shadow-lg rounded-box"
  >
    <svg
      aria-label="Previous"
      class="fill-current size-4"
      slot="previous"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
    </svg>
    <svg
      aria-label="Next"
      class="fill-current size-4"
      slot="next"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
    </svg>
    <calendar-month></calendar-month>
  </calendar-date>
</template>