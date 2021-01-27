<template>
  <BaseComponent v-bind="$props">
    <input v-bind="$props" v-model="state.text.value" class="inputText" />
    <!-- <span
      id="email-error"
      v-if="!!state.text.errorMessage"
      class="block font-medium text-brand-danger"
    >
      {{ state.text.errorMessage }}
    </span> -->
  </BaseComponent>
</template>

<script>
import { reactive } from "vue";
import { useField } from "vee-validate";

import BaseComponent from "./base.vue";

export default {
  components: { BaseComponent },
  props: ["placeholder"],
  setup() {
    const { value: textValue, errorMessage: textErrorMessage } = useField(
      "text",
      {}
    );

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      text: {
        value: textValue,
        errorMessage: textErrorMessage
      }
    });

    return { state };
  }
};
</script>
<style scoped>
.inputText {
  @apply block text-sm font-title-medium w-full px-4 py-2 mt-1 border border-paragraphy-4 rounded focus:border-primary-1 focus:ring-1 focus:ring-primary-1 focus:outline-none;
}
</style>
