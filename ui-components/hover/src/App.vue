<template>
  <div id="app">
    <v-app>
      <usage/>
      <transitions/>
    </v-app>
  </div>
</template>

<script>
import Transitions from "./components/Transitions";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Transitions,
    Usage
  }
};
</script>