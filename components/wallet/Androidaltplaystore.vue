<script>
export default {
  props: {
    att: {
      required: false,
    },
    data: {
      required: true,
    },
	campo: {
	  type: String,
	  required: true,
	},
  },
};
</script>

<template>
	  <tr
    v-if="att.campo == 'Android' && data[campo]"
    class="border-b border-gray-200"
  >
    <td></td>
    <td>{{campo}}</td>
    <td>
      <span class="text-blue-600 text-sm">
        <a :href="data[campo]" target="_blank">
          {{ data[campo] }}
        </a>
      </span>
    </td>
  </tr>
</template>