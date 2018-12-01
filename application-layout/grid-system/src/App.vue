<template>
  <div id="app">
    <v-app>
      <usage/>
      <offset/>
      <order/>
      <direction-and-align/>
      <row-and-column-breakpoints/>
      <nested-grid/>
      <unique-layout/>
    </v-app>
  </div>
</template>

<script>
import DirectionAndAlign from "./components/DirectionAndAlign.vue";
import NestedGrid from "./components/NestedGrid.vue";
import Offset from "./components/Offset.vue";
import Order from "./components/Order.vue";
import RowAndColumnBreakpoints from "./components/RowAndColumnBreakpoints.vue";
import UniqueLayout from "./components/UniqueLayout";
import Usage from "./components/Usage.vue";

export default {
  name: "app",
  components: {
    DirectionAndAlign,
    NestedGrid,
    Offset,
    Order,
    RowAndColumnBreakpoints,
    UniqueLayout,
    Usage
  }
};
</script>