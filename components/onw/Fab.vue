<script setup>
const props = defineProps([
  "id",
  "type",
  "oppending",
  "opdata",
  "operror",
  "dbpending",
  "dbdata",
  "dberror",
]);
</script>

<template>
  <div class="fab fab-flower">
    <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
    <div tabindex="0" role="button" class="btn btn-circle btn-lg">
      <svg
        aria-label="New"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="size-6"
      >
        <path
          d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
        />
      </svg>
    </div>

    <!-- Main Action button replaces the original button when FAB is open -->
    <button class="fab-main-action btn btn-circle btn-lg btn-primary">
      <svg
        aria-label="New post"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <OnwFabosm :id="id" :type="type" />
    <OnwFabg       :dbpending="dbpending" :dbdata="dbdata" />
    <OnwFabbing    :dbpending="dbpending" :dbdata="dbdata" />
    <OnwFabwebsite :oppending="oppending" :opdata="opdata" />
    <OnwFabsocial  :oppending="oppending" :opdata="opdata" />
  </div>
</template>
