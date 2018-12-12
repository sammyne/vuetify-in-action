<template>
  <div id="app">
    <v-app>
      <usage/>
    </v-app>
  </div>
</template>

<script>
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Usage
  }
};
</script>