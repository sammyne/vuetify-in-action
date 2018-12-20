<template>
  <div id="app">
    <v-app>
      <usage/>
      <contain-and-cover/>
      <height/>
      <fixed-ratio/>
      <gradients/>
    </v-app>
  </div>
</template>

<script>
import ContainAndCover from "./components/ContainAndCover.vue";
import FixedRatio from "./components/FixedRatio.vue";
import Gradients from "./components/Gradients.vue";
import Height from "./components/Height.vue";
import Usage from "./components/Usage.vue";

export default {
  name: "app",
  components: {
    ContainAndCover,
    FixedRatio,
    Gradients,
    Height,
    Usage
  }
};
</script>
