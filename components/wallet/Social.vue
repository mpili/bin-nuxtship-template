<script>
export default {
  props: {
    social: {
      type: String,
      required: true,
    },
    icona: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    account: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <div v-if="account" class="p-2">
    <a :href="url + account" target="_blank">
      <button
        class="flex select-none items-center gap-3 rounded-lg bg-cyan-500 py-2 px-5 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        <Icon :name="icona" size="36" color="white" />
        {{ social }}
      </button>
    </a>
  </div>
</template>
