<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted";
  className?: string;
}>(), {
  size: "md",
  styleName: "primary",
});

const styles = {
  outline: "btn-outline",
  primary: "btn-primary",
  inverted: "btn-secondary",
};
</script>

<template>
  <button
    :class="[
      'btn transition-all duration-300',
      props.block && 'btn-block',
      props.size === 'lg' ? 'btn-lg' : 'btn-md',
      styles[props.styleName],
      props.className,
    ]"
  >
    <slot />
  </button>
</template>
