<template>
  <div id="app">
    <v-app>
      <usage/>
    </v-app>
  </div>
</template>

<script>
import Usage from "./components/Usage.vue";

export default {
  name: "app",
  components: {
    Usage
  }
};
</script>