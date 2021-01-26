<template>
  <component :is="type" v-bind="$props" />
</template>

<script>
import text from "./text.vue";

export default {
  props: {
    type: {
      type: String,
      required: true,
      default: text
    }
  }
};
</script>
