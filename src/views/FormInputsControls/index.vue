<template>
  <div class="flex justify-center w-full">
    <ngTextField label="Nome" placeholder="aa" v-model="state.value" />

    <p>{{ state.value }}</p>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "FormInputsControls",
  setup() {
    const state = reactive({
      value: ""
    });

    return { state };
  }
};
</script>
