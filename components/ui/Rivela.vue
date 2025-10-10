<script>
export default {
  name: "Rivela",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<template>
	<div tabindex="0" class="collapse bg-base-100 border-base-300 border my-4">
		<div class="collapse-title text-error">{{title}}</div>
		<div class="collapse-content text-sm">
			<p class="text-error-content font-mono text-sm">
			{{description}}
			</p>
		</div>
	</div>
</template>