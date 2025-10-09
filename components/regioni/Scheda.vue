<script>
export default {
  props: {
    regione: {
      required: true,
    },
  },
};
</script>

<template>
  {{useTagsnameit(regione.tags)}}
</template>
