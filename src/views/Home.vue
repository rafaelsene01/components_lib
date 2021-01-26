<template>
  <div class="flex justify-center w-full">
    <div>
      <h1>Home</h1>
      <h2>Home</h2>
      <p class="body-1">Home</p>
      <Icon name="Loading" color="#999" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icon from "@/components/Icon/index.vue";

@Options({
  components: { Icon }
})
export default class Home extends Vue {}
</script>
