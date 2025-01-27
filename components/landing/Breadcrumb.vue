<script>
export default {
  props: {
    voci: {
      type: Array,
      required: false
    },
  }
}
</script>

<template>
  <div class="breadcrumbs text-sm">
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li v-for="voce of voci">
        <NuxtLink v-if="voce.path" :href="voce.path">{{voce.label}}</NuxtLink>
        <span v-else-if="voce.label">{{voce.label}}</span>
      </li>
    </ul>
  </div>
</template>
