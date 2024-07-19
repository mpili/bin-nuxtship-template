<script>
export default {
  props: {
	icona: {
	  type: String,
	},
	testo: {
	  type: String,
	},
	coloreicona: {
	  type: String,
	}
  },
};
</script>

<template>
      <div
        class="flex items-center rounded-full border bg-white m-1 py-2 pl-3 pr-4 text-xs text-black font-bold gap-1 shadow"
      >
        <Icon :name="icona" size="28" :color="coloreicona" /> {{ testo }}
      </div>
</template>
