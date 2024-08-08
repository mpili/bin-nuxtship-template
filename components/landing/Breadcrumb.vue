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
    <nav
      class="text-sm sm:text-base bg-white p-2 rounded-md shadow-lg my-4"
    >
      <ol class="list-none p-0 inline-flex space-x-2">
        <li class="flex items-center">
          <NuxtLink
            href="/"
            to="/"><Icon name="ic:sharp-home" size="24" color="#bbb" /></NuxtLink>
          <span class="text-gray-400">/</span>
        </li>
        <li v-for="voce of voci" class="flex items-center">
          <NuxtLink v-if="voce.path"
            :href="voce.path"
            :to="voce.path"
            class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >{{voce.label}}</NuxtLink
          >
          <span v-else-if="voce.label" class="text-gray-800">{{voce.label}}</span>
          <span v-if="voce.path" class="text-gray-400 ml-1">/</span>
        </li>
      </ol>
    </nav>
</template>
