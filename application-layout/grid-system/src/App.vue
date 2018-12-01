<template>
  <div id="app">
    <v-app>
      <usage/>
      <offset/>
    </v-app>
  </div>
</template>

<script>
import Offset from "./components/Offset.vue";
import Usage from "./components/Usage.vue";

export default {
  name: "app",
  components: {
    Offset,
    Usage
  }
};
</script>