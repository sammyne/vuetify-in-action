<template>
  <div id="app">
    <v-app>
      <usage/>
      <chips/>
    </v-app>
  </div>
</template>

<script>
import Chips from "./components/Chips";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Chips,
    Usage
  }
};
</script>
