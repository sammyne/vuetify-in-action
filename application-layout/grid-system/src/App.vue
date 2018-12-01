<template>
  <div id="app">
    <v-app>
      <usage/>
      <offset/>
      <order/>
      <direction-and-align/>
      <row-and-column-breakpoints/>
    </v-app>
  </div>
</template>

<script>
import DirectionAndAlign from "./components/DirectionAndAlign.vue";
import Offset from "./components/Offset.vue";
import Order from "./components/Order.vue";
import RowAndColumnBreakpoints from "./components/RowAndColumnBreakpoints.vue";
import Usage from "./components/Usage.vue";

export default {
  name: "app",
  components: {
    DirectionAndAlign,
    Offset,
    Order,
    RowAndColumnBreakpoints,
    Usage
  }
};
</script>