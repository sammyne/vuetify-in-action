<template>
  <div id="app">
    <v-app>
      <v-container>
        <usage/>
        <color-and-shift/>
        <toggle/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import ColorAndShift from "./components/ColorAndShift";
import Toggle from "./components/Toggle";
import Usage from "./components/Usage";

export default {
  name: "app",
  components: {
    ColorAndShift,
    Toggle,
    Usage
  }
};
</script>