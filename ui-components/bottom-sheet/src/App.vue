<template>
  <div id="app">
    <v-app>
      <usage/>
      <inset/>
    </v-app>
  </div>
</template>

<script>
import Inset from "./components/Inset";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Inset,
    Usage
  }
};
</script>