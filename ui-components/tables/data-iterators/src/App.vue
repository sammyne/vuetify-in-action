<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage />
        <slots />
        <expand />
        <filter-demo />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Expand from "./components/Expand";
import FilterDemo from "./components/Filter";
import Slots from "./components/Slots";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    Expand,
    FilterDemo,
    Slots,
    Usage
  }
};
</script>
