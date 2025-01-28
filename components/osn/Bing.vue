<script>
export default {
  props: {
    pending: {
      required: true,
    },
    dbdata: {
      required: true,
    },
	label: {
		type: String,
	}
  },
};
</script>

<template>
  <span v-if="!pending" class="mt-8">
    <span v-if="dbdata?.items[0]?.bing">
      <a
        :href="dbdata?.items[0]?.bing"
        target="_blank"
        rel="noopener"
        class="text-primary font-bold"
      >{{label}}</a>
    </span>
    <span v-else>{{label}}</span>
  </span>
  <span v-else>{{label}}</span>
</template>
