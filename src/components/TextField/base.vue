<template>
  <label class="block">
    <span v-if="!!label" class="font-title-light text-xs text-paragraphy-3">
      {{ label }}
    </span>
    <slot />
  </label>
</template>
<script>
export default {
  props: ["label"]
};
</script>
